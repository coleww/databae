function get (key) {
  return JSON.parse(localStorage.getItem(key))
}

function set (key, object) {
  if (typeof object == 'string') throw("NO STRINGS ATTACHED!!!!!!!!!!!!!!!!!!")
  var stringCheese = JSON.stringify(object)
  if (stringCheese.length > 5242878) throw('wow, u do have a rly big team')
  localStorage.setItem(key, stringCheese)
}

function inc (key, amt) {
  return mathIt(key, (amt || 1))
}

function dec (key, amt) {
  return mathIt(key, -(amt || 1))
}

function mathIt (key, amt) {
  var oldVal = get(key)
  if (typeof oldVal !== 'number') throw('u tried to __crement ' + oldVal + ' but it wasnt having it')
  var newVal = oldVal + amt
  set(key, newVal)
  return newVal
}

function push (key, el) {
  var arr = get(key)
  arr.push(el)
  set(key, arr)
}

function remove (key, el) {
  var arr = get(key)
  arr.splice(arr.indexOf(el), 1)
  set(key, arr)
}

function clear () {
  localStorage.clear()
}

module.exports = {
  get: get,
  set: set,
  inc: inc,
  dec: dec,
  push: push,
  remove: remove,
  clear: clear
}


