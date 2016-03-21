DATABAE
----------------------

a simple localStorage abstraction. There are many like it but this one is mine.

-----------------------------

auto JSON.(stringify/parse)'s stuff so you don't have to care about squat

-----------------------------

DOES NOT ACCEPT PLAIN STRING INPUT DO NOT EVER PUT A STRING INTO THE DATABAE Y WOULD U DO THAT LOCALSTORAGE JUST DOES THAT

-----------------------------

`npm install databae`

------------------------------------------

### general
- get(key)
- set(key, val)

### numeric
- inc(key, amt || 1)  
- dec(key, amt || 1)

### arrays
- push(key, el)
- remove(key, el)

TODO: 
add whatever other methods i end up needing for this other project lol
do some try/catch magics to test for error handling