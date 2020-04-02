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
   ```sql
  select Student.SId, Sname, avg3 from (select * from (select SID, (class1+class2+class3)/3 as avg3 from (select * from Student left join (select SId s1, score as class1 from sc where sc.CId = '01')as t1 on Student.SId = t1.s1 left join (select SId s2, score as class2 from sc where sc.CId = '02')as t2 on Student.SId = t2.s2 left join (select SId s3, score as class3 from sc where sc.CId = '03')as t3 on Student.SId = t3.s3) ddf) ddkf where avg3 > 60) ggk, Student where ggk.SId=Student.SId;
   ```
