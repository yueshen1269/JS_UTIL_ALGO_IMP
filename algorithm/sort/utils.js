
const exch = (a, i, j) => {
  [a[i], a[j]] = [a[j], a[i]];
}

const less = (a, i, j) => {
  return a[i] < a[j];
}

export default {
  exch,
  less,
}
