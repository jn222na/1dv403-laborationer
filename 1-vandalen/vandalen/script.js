"use strict";



var makePerson = function(persArr) {
    /*
    data.sort(function(a, b){
  return a.age - b.age;
});
*/
var result = {};
var sum =0;
// Skapar objektet result

/* Skapar en array för namnen */
var name = [persArr[0].name,persArr[1].name,persArr[2].name];
name.sort(function(a,b){
        return a.localeCompare(b);
});
// Lägger till arrayen name till result.names
result.names = name.join(", ");

/*Skapar en array för åldrarna */
var age = [persArr[0].age,persArr[1].age,persArr[2].age];
//Sorterar åldrarna
age.sort();
//Fixar lägsta, högsta.
result.minAge = Math.min.apply(Math, age);
result.maxAge = Math.max.apply(Math, age);
//Gör en for loop som tar alla väden i arrayen och summerar dom till variabeln sum.
for (var i = 0; i < persArr.length; i++) {
    sum += parseInt(persArr[i].age);
}
//Fixar medelvärdet
result.averageAge = Math.ceil((sum/persArr.length));
console.log(result);
return result;
};






