"use strict";


var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
var makePerson = function(persArr) {
    
    data.sort(function(a, b){
  return a.age - b.age;
});
var strang;

var result = {};
result.names = persArr.map(function (pers) {
    pers.age;
    console.log(pers.age);
    return pers.name;
}).join(", ");


console.log(result)
return [result];
};


var result =  makePerson(data);



var arrayfunk = function(name, age){
};

