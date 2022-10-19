const names = require('./5_names')  //require is used to importing
const sayHi = require('./7_utils')
const data = require('./6_alt-flavor')
console.log(data);

sayHi('Pooja')
sayHi(names.arslaan)  //called through object,name is a object
sayHi(names.carlton)