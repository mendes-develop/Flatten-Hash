'use strict'

const obj = {

  a: {
    b: {
      c: 1,
      d: 2
    }
  }
  
};

// Should return let newObj = {abc: 1, abd: 2}

let newHash = new Object()

function flatten(hash, newKey = ''){

  
  for (let [key, value] of Object.entries(hash)) {
    if (typeof value === "object") {

      flatten(hash[key], newKey + key)

      } else {

      // console.log(newKey += key)
      newHash[newKey += key] = value
      

    }
  }
  return newHash
}

flatten(obj)

