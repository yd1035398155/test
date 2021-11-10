// let MIN = 1 << 31
// function calc(a, op, b) {
//   // write code here
//   let res
//   if (op == "+") {
//     res = add(a, b)
//   } else if (op == "-") {
//     res = des(a, b)
//   } else if (op == "*") {
//     res = multi(a, b)
//   } else if (op == "/") {
//     res = divide(a, b)
//   }
//   return res
// }
// function add(a, b) {
//   let res = a
//   while (b) {
//     res = a ^ b
//     b = (a & b) << 1
//     a = res
//   }
//   return res
// }
// function negNum(n) {
//   return add(~n, 1)
// }

// function des(a, b) {
//   return add(a, negNum(b))
// }

// function isNeg(n) {
//   return n < 0
// }

// function multi(a, b) {
//   let res = 0
//   let x = isNeg(a) ? negNum(a) : a
//   let y = isNeg(b) ? negNum(b) : b
//   while (y) {
//     if (y & 1) res = add(res, x)
//     y = y >> 1
//     x = x << 1
//   }
//   return isNeg(a) ^ isNeg(b) ? negNum(res) : res
// }

// function div(a, b) {
//   let x = isNeg(a) ? negNum(a) : a
//   let y = isNeg(b) ? negNum(b) : b
//   let res = 0
//   for (let i = 31; i > -1; i = des(i, 1)) {
//     if (x >> i >= y) {
//       res |= 1 << i
//       x = des(x, y << i)
//     }
//   }
//   return isNeg(a) ^ isNeg(b) ? negNum(res) : res
// }

// function divide(a, b) {
//   if (a == MIN && b == MIN) return 1
//   else if (b == MIN) return 0
//   else if (a == MIN) {
//     let res = div(add(a, 1), b)
//     return add(res, div(des(a, multi(res, b)), b))
//   } else return div(a, b)
// }
// export {}

// 相加
function add(a, b) {
  // 相加 a，b异或
  while (b) {
    var c = (a & b) << 1
    a = a ^ b
    b = c
  }
  return a
}
// 相减
function subtract(a, b) {
  // a - b 等于 a + (-b); -b等于 b取反加1
  var tmpB = add(~b, 1)
  return add(a, tmpB)
}
// 相乘
function multiple(a, b) {
  // a*b=a*2**0*b0 +a*2**1*b1 + a*2**2*b2 + ...
  var res = 0
  while (b) {
    if (b & 1) {
      res = add(res, a)
    }
    a <<= 1
    b >>= 1
  }
  return res
}
//相乘 考虑负数
function multiplePlus(a, b) {
  if (a < 0) {
    if (b < 0) {
      // 全部置正数 相乘
      return multiple(add(~a, 1), add(~b, 1))
    } else {
      //全部置为正数，然后结果取反
      var tmpA = add(~a, 1)
      var tmpRes = multiple(tmpA, b)
      return add(~tmpRes, 1)
    }
  } else {
    if (b < 0) {
      //全部置为正数，然后结果取反，逻辑与上面一样
      var tmpB = add(~b, 1)
      var tmpRes = multiple(a, tmpB)
      return add(~tmpRes, 1)
    } else {
      return multiple(a, b)
    }
  }
}
// 除法
function divide(a, b) {
  var res = 0
  for (let i = 31; i >= 0; i = subtract(i, 1)) {
    if (a >> i >= b) {
      res |= 1 << i
      a = subtract(a, b << i)
    }
  }
  return res
}
// 除法 考虑负数
function dividePlus(a, b) {
  if (b == 0) {
    throw Error("除数不能为0")
    return
  }
  if (a < 0) {
    if (b < 0) {
      return divide(add(~a, 1), add(~b, 1))
    } else {
      // 逻辑和乘法一样
      var tmpA = add(~a, 1)
      var tmpRes = divide(tmpA, b)
      return add(~tmpRes, 1)
    }
  } else {
    if (b < 0) {
      // 逻辑和乘法一样
      var tmpB = add(~b, 1)
      var tmpRes = divide(a, tmpB)
      return add(~tmpRes, 1)
    } else {
      return divide(a, b)
    }
  }
}
function computed(a, op, b) {
  if (op === "+") {
    return add(a, b)
  } else if (op === "-") {
    return subtract(a, b)
  } else if (op === "*") {
    return multiplePlus(a, b)
  } else if (op === "/") {
    return dividePlus(a, b)
  }
}
let res = computed(-16, "/", 8)
console.log(res)
export {}
