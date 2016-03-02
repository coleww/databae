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
