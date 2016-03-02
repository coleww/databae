(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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



},{}],2:[function(require,module,exports){
var db = require('./')

db.clear()


    db.set('foo', {bar: 'foo'})
    console.log({bar: 'foo'}, db.get('foo'))



    db.set('bar', {foo: 'bar'})
    console.log(db.get('bar'), {foo: 'bar'})

    db.set('inc', 1)
    console.log(db.inc('inc'), 2)
    console.log(db.inc('inc', 3), 5)
    console.log(db.get('inc'), 5)


    db.set('dec', 5)
    console.log(db.dec('dec'), 4)
    console.log(db.dec('dec', 3), 1)
    console.log(db.get('dec'), 1)


    db.set('x', [1])
    db.push('x', 2)
    console.log(db.get('x')[0], 1)
    console.log(db.get('x')[1], 2)


    db.set('y', [1, 2])
    db.remove('y', 2)
    console.log(db.get('y').length, 1)
    console.log(db.get('y')[0], 1)

},{"./":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsInRlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImZ1bmN0aW9uIGdldCAoa2V5KSB7XG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpXG59XG5cbmZ1bmN0aW9uIHNldCAoa2V5LCBvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT0gJ3N0cmluZycpIHRocm93KFwiTk8gU1RSSU5HUyBBVFRBQ0hFRCEhISEhISEhISEhISEhISEhIVwiKVxuICB2YXIgc3RyaW5nQ2hlZXNlID0gSlNPTi5zdHJpbmdpZnkob2JqZWN0KVxuICBpZiAoc3RyaW5nQ2hlZXNlLmxlbmd0aCA+IDUyNDI4NzgpIHRocm93KCd3b3csIHUgZG8gaGF2ZSBhIHJseSBiaWcgdGVhbScpXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgc3RyaW5nQ2hlZXNlKVxufVxuXG5mdW5jdGlvbiBpbmMgKGtleSwgYW10KSB7XG4gIHJldHVybiBtYXRoSXQoa2V5LCAoYW10IHx8IDEpKVxufVxuXG5mdW5jdGlvbiBkZWMgKGtleSwgYW10KSB7XG4gIHJldHVybiBtYXRoSXQoa2V5LCAtKGFtdCB8fCAxKSlcbn1cblxuZnVuY3Rpb24gbWF0aEl0IChrZXksIGFtdCkge1xuICB2YXIgb2xkVmFsID0gZ2V0KGtleSlcbiAgaWYgKHR5cGVvZiBvbGRWYWwgIT09ICdudW1iZXInKSB0aHJvdygndSB0cmllZCB0byBfX2NyZW1lbnQgJyArIG9sZFZhbCArICcgYnV0IGl0IHdhc250IGhhdmluZyBpdCcpXG4gIHZhciBuZXdWYWwgPSBvbGRWYWwgKyBhbXRcbiAgc2V0KGtleSwgbmV3VmFsKVxuICByZXR1cm4gbmV3VmFsXG59XG5cbmZ1bmN0aW9uIHB1c2ggKGtleSwgZWwpIHtcbiAgdmFyIGFyciA9IGdldChrZXkpXG4gIGFyci5wdXNoKGVsKVxuICBzZXQoa2V5LCBhcnIpXG59XG5cbmZ1bmN0aW9uIHJlbW92ZSAoa2V5LCBlbCkge1xuICB2YXIgYXJyID0gZ2V0KGtleSlcbiAgYXJyLnNwbGljZShhcnIuaW5kZXhPZihlbCksIDEpXG4gIHNldChrZXksIGFycilcbn1cblxuZnVuY3Rpb24gY2xlYXIgKCkge1xuICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0OiBnZXQsXG4gIHNldDogc2V0LFxuICBpbmM6IGluYyxcbiAgZGVjOiBkZWMsXG4gIHB1c2g6IHB1c2gsXG4gIHJlbW92ZTogcmVtb3ZlLFxuICBjbGVhcjogY2xlYXJcbn1cblxuXG4iLCJ2YXIgZGIgPSByZXF1aXJlKCcuLycpXG5cbmRiLmNsZWFyKClcblxuXG4gICAgZGIuc2V0KCdmb28nLCB7YmFyOiAnZm9vJ30pXG4gICAgY29uc29sZS5sb2coe2JhcjogJ2Zvbyd9LCBkYi5nZXQoJ2ZvbycpKVxuXG5cblxuICAgIGRiLnNldCgnYmFyJywge2ZvbzogJ2Jhcid9KVxuICAgIGNvbnNvbGUubG9nKGRiLmdldCgnYmFyJyksIHtmb286ICdiYXInfSlcblxuICAgIGRiLnNldCgnaW5jJywgMSlcbiAgICBjb25zb2xlLmxvZyhkYi5pbmMoJ2luYycpLCAyKVxuICAgIGNvbnNvbGUubG9nKGRiLmluYygnaW5jJywgMyksIDUpXG4gICAgY29uc29sZS5sb2coZGIuZ2V0KCdpbmMnKSwgNSlcblxuXG4gICAgZGIuc2V0KCdkZWMnLCA1KVxuICAgIGNvbnNvbGUubG9nKGRiLmRlYygnZGVjJyksIDQpXG4gICAgY29uc29sZS5sb2coZGIuZGVjKCdkZWMnLCAzKSwgMSlcbiAgICBjb25zb2xlLmxvZyhkYi5nZXQoJ2RlYycpLCAxKVxuXG5cbiAgICBkYi5zZXQoJ3gnLCBbMV0pXG4gICAgZGIucHVzaCgneCcsIDIpXG4gICAgY29uc29sZS5sb2coZGIuZ2V0KCd4JylbMF0sIDEpXG4gICAgY29uc29sZS5sb2coZGIuZ2V0KCd4JylbMV0sIDIpXG5cblxuICAgIGRiLnNldCgneScsIFsxLCAyXSlcbiAgICBkYi5yZW1vdmUoJ3knLCAyKVxuICAgIGNvbnNvbGUubG9nKGRiLmdldCgneScpLmxlbmd0aCwgMSlcbiAgICBjb25zb2xlLmxvZyhkYi5nZXQoJ3knKVswXSwgMSlcbiJdfQ==
