let n = 3
let nArr = []
for (let i = 1; i <= n; i++) {
  nArr.push(i)
}
let count = 100
let res = []
debugger
DFS(nArr, 0)
res.sort(fn)
for (let i = 0; i < res.length; i++) {
  console.log(res[i].join(" "))
}
function DFS(arr, i) {
  if (i == n) {
    if (count == 0) return
    count--
    res.push(arr.slice())
  }
  for (let j = i; j < n; j++) {
    if (arr[j] == i + 1) {
      continue
    }
    swap(arr, j, i)
    DFS(arr, i + 1)
    swap(arr, j, i)
  }
}
function swap(arr, L, R) {
  let t = arr[L]
  arr[L] = arr[R]
  arr[R] = t
}
function fn(a, b) {
  let i = 0
  let flag = 0
  while (i < a.length) {
    if (a[i] < b[i]) {
      flag = -1
      break
    } else if (a[i] > b[i]) {
      flag = 1
      break
    } else {
      i++
    }
  }
  return flag
}
