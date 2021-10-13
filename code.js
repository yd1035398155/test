let data = {
  localDate: "2020-09-01",
  ip: "128.0.0.9",
  method: "POST",
  qunarglobal: "asdu2333wuroo",
  "nginx-ip": "100.90.98.109",
}
let token = ":ip - - [:localDate] ':method':qunarglobal' [:nginx-ip] ':qunarglobal' "
function format(token, data) {
  for (let i in data) {
    let reg = ff(i)
    token = token.replace(reg, data[i])
  }
  return token
}
function ff(str) {
  return new RegExp(":" + str, "g")
}
let res = format(token, data)
console.log(res)
