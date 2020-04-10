1.学生表 Student(SId,Sname,Sage,Ssex)

--SId 学生编号,Sname 学生姓名,Sage 出生年月,Ssex 学生性别

--2.课程表 Course(CId,Cname,TId) --CId --课程编号,Cname 课程名称,TId 教师编号

--3.教师表 Teacher(TId,Tname) --TId 教师编号,Tname 教师姓名

--4.成绩表 SC(SId,CId,score) --SId 学生编号,CId 课程编号,score 分数

1. 查询"01"课程比"02"课程成绩高的学生的信息及课程分数
  `不会`
  未掌握的知识点：表内连接，from后面可以跟两个表，以及表连接的笛卡尔积现象。
  ```sql
  select * from Student RIGHT JOIN (
  select t1.SId, class1, class2 from
       (select SId, score as class1 from sc where sc.CId = '01')as t1,
       (select SId, score as class2 from sc where sc.CId = '02')as t2
  where t1.SId = t2.SId AND t1.class1 > t2.class2
  ) r
  on Student.SId = r.SId;
  ```
1.1 查询同时存在" 01 "课程和" 02 "课程的情况
  (一致)
  ```sql
    /* 看过1的答案后 */
    select * from
    (select * from sc where sc.CId = '01') as t1,
    (select * from sc where sc.CId = '02') as t2
    where t1.SId = t2.SId;
  ```
1.2 查询存在"01"课程但可能不存在"02"课程的情况
  (一致)
  ```sql
    select * from
    (select * from sc where sc.CId = '01') as t1
    left join
    (select * from sc where sc.CId = '02') as t2
    on t1.SId = t2.SId;
  ```
1.3 查询不存在"01"课程但存在"02"课程的情况
  (不一致)
  ```sql
  select * from
  (select score class2, CId, SId from sc where sc.CId = '02') as t2
  left join
  (select score as class1, SId from sc where sc.CId = '01') as t1
  on t1.SId = t2.SId where t1.class1 is null;
  ```
  ```sql
  select * from sc
  where sc.SId not in (
      select SId from sc
      where sc.CId = '01'
  )
  AND sc.CId= '02';
  ```

2. 查询平均成绩大于等于 60 分的同学的学生编号和学生姓名和平均成绩
   > 我的解法 错误
   > 如此冗长的原因：未使用group by 语法，没有掌握group by 的使用
   ```sql
  select Student.SId, Sname, avg3 from (select * from (select SID, (class1+class2+class3)/3 as avg3 from (select * from Student left join (select SId s1, score as class1 from sc where sc.CId = '01')as t1 on Student.SId = t1.s1 left join (select SId s2, score as class2 from sc where sc.CId = '02')as t2 on Student.SId = t2.s2 left join (select SId s3, score as class3 from sc where sc.CId = '03')as t3 on Student.SId = t3.s3) ddf) ddkf where avg3 > 60) ggk, Student where ggk.SId=Student.SId;
   ```
  > 较优解
   ```sql
   select student.SId,sname,ss from student,(
    select SId, AVG(score) as ss from sc
    GROUP BY SId
    HAVING AVG(score)> 60
    )r
  where student.sid = r.sid;
  ```
   ```sql
   select Student.SId, Student.Sname, r.ss from Student right join(
      select SId, AVG(score) AS ss from sc
      GROUP BY SId
      HAVING AVG(score)> 60
  )r on Student.SId = r.SId;
  ```
   ```sql
  select s.SId,ss,Sname from(
    select SId, AVG(score) as ss from sc
    GROUP BY SId
    HAVING AVG(score)> 60
    )r left join
    (select Student.SId, Student.Sname from
    Student)s on s.SId = r.SId;
  ```
3. 查询在 SC 表存在成绩的学生信息
  ```sql
  select Student.* from
  Student ,
  (select SId from sc GROUP BY SID ) as ss
  where Student.SId = ss.SId;
  ```
  ```sql
  select DISTINCT student.*
  from student,sc
  where student.SId=sc.SId;
  ```
4 查询所有同学的学生编号、学生姓名、选课总数、所有课程的总成绩(没成绩的显示为 null )
```sql
select student.sid, student.sname,r.coursenumber,r.scoresum
from student,
(select sc.sid, sum(sc.score) as scoresum, count(sc.cid) as coursenumber from sc
group by sc.sid)r
where student.sid = r.sid;
```
4.1 查有成绩的学生信息
<!-- 不知道和第三题表达的意思有什么区别 -->
<!-- 这一题涉及到in和exists的用法，在这种小表中，两种方法的效率都差不多
[SQL查询中in和exists的区别分析](https://www.jianshu.com/p/f212527d76ff)
当表2的记录数量非常大的时候，选用exists比in要高效很多.
EXISTS用于检查子查询是否至少会返回一行数据，该子查询实际上并不返回任何数据，而是返回值True或False.
结论：IN()适合B表比A表数据小的情况
结论：EXISTS()适合B表比A表数据大的情况 -->
 ```sql
select * from student
where exists (select sc.sid from sc where student.sid = sc.sid);
```
```sql
select * from student
where student.sid in (select sc.sid from sc);
  ```
5. 查询「李」姓老师的数量
```sql
select count(*) from teacher where Tname like 'Li%';
```
