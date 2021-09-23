let nums = [3, 30, 34, 5, 9]
function comp(a, b) {
  if (parseInt(a.toString() + b.toString()) <= parseInt(b.toString() + a.toString())) {
    return 1
  } else {
    return -1
  }
}
nums.sort(comp)
console.log(
  nums.reduce((sum, cur) => {
    return sum + cur
  })
)
