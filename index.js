function get (key) {
  return JSON.parse(localStorage.getItem(key))
}

function set (key, object) {
  if (!object) throw('u passed something falsey instead of a value')
  if (typeof object == 'string') throw("u cannot pass a raw string to databae")
  var stringCheese = JSON.stringify(object)
  if (stringCheese.length > 5242878) throw('u passed something that is too big for localstorage')
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
  if (typeof oldVal !== 'number') throw('u tried to __crement ' + oldVal + ' but it is a ' + typeof oldVal)
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


