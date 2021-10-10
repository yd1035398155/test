// // 实现一个LazyMan，可以按照以下方式调用:
// // LazyMan(“Hank”)输出:
// // Hi! This is Hank!

// // LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
// // Hi! This is Hank!
// // //等待10秒..
// // Wake up after 10
// // Eat dinner~

// // LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
// // Hi This is Hank!
// // Eat dinner~
// // Eat supper~

// // LazyMan(“Hank”).eat(“supper”).sleepFirst(5)输出
// // //等待5秒
// // Wake up after 5
// // Hi This is Hank!
// // Eat supper
// class lazyMan {
//   constructor(name) {
//     debugger
//     this.name = name
//     this.tasks = []
//     const task = () => {
//       console.log(`Hi This is ${this.name}`)
//       this.next()
//     }
//     this.tasks.push(task)
//     setTimeout(() => {
//       this.next()
//     }, 0)
//   }
//   next() {
//     let fn = this.tasks.shift()
//     fn && fn()
//     return this
//   }
//   sleepWrapper(time, first) {
//     const task = () => {
//       setTimeout(() => {
//         console.log(`Wake up after ${time}s`)
//         this.next()
//       }, time * 1000)
//     }
//     if (first) {
//       this.tasks.unshift(task)
//     } else {
//       this.tasks.push(task)
//     }
//   }
//   sleep(time) {
//     console.log("sleep")
//     this.sleepWrapper(time, false)
//     return this
//   }
//   sleepFirst(time) {
//     console.log("sleepfirst")
//     this.sleepWrapper(time, true)
//     return this
//   }
// }
// function LazyMan(name) {
//   return new lazyMan(name)
// }
// LazyMan("Hank").sleep(2).sleepFirst(3)
function deepClone(obj, map = new WeakMap()) {
  if (typeof obj != "object" || obj == null) return obj
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)

  let res = Array.isArray(obj) ? [] : {}
  if (map.get(obj)) {
    return map.get(obj)
  }
  map.set(obj, res)
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      res[key] = deepClone(obj[key], map)
    }
  }
  return res
}
const target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: "child",
  },
  field4: [2, 4, 8],
}
target.target = target
debugger
let res = deepClone(target)
console.log(res)
