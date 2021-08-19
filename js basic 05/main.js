let arr = ['kire','pece','spase','kole','cane']

let spoeno = arr.join(',')

console.log(spoeno)


/*

let str = 'ovaj string ke go naprajme arej'

let arrOdStr = str.split(' ')

console.log(arrOdStr)

 // i sa ke go spojme pak deka mozhime...

let voStrPak = arrOdStr.join(' ')

console.log(voStrPak) // pak vo string


// prevzemi go posledniot element od arrejot

let posledniot = arrOdStr.pop()

console.log(posledniot,arrOdStr)

arrOdStr.push('ubav') // dodaj nov element na krajot

console.log('dodadovme ubav na krajot',arrOdStr)

let prviot = arrOdStr.shift() // izvadi go prviot element i stavi go vo promenliva

console.log(prviot,arrOdStr)

arrOdStr.unshift('gorniot')

console.log(arrOdStr)
*/


/*====================================================================================================================*/
/*

let ovoshtija = ["Jabolka", "krushi", "praski", "kapini"];

console.log(ovoshtija)

ovoshtija[0] = "kivi";       //smenvame jabolka za kivi

console.log(ovoshtija)

ovoshtija[ovoshtija.length] = 'jabolka'; // go vrativme jabolka vo arejot

console.log(ovoshtija) 


delete ovoshtija[1]

console.log(ovoshtija)
console.log('se koristi samo vo ekstremni sluchai kaj sho strukturata na arejot mora da ostani ista...')


ovoshtija.splice(0, 2);   // brishime od pochetna pozicija, broj na elementi
console.log(ovoshtija)


ovoshtija.splice(0, 2,'krushi','sijalici');   // brishime od pochetna pozicija, broj na elementi
console.log(ovoshtija)


var spojka = arrOdStr.concat(ovoshtija, arr);

console.log(spojka)

var novaSpojka = arrOdStr.concat("so nova vrednost"); 

console.log(novaSpojka)



// SLICE PRAJ NOV AREJ OD TOJ SHO GO SECHI a i concat...
novaSpojka.slice(2);

console.log('secnat star',novaSpojka)

const secnat = novaSpojka.slice(2); //otstranuvame 2 elementi od pochetok

console.log('secnat nov',secnat)

// Seckanje so pozicija ...

const secnat2 = novaSpojka.slice(1,3); //otstranuvame od pozicija 1 do pozicija 3 BEZ 3tata pozicija... 

console.log('secnat nov',secnat2)

console.log(novaSpojka.toString())


// Sortiranje

let gajba = ['jabolko','krusha','mangoup','papaja','kashikara']
console.log(gajba.sort())
console.log(gajba.reverse())



// Numerichko sortiranje

const points = [40, 100, 1, 5, 25, 10];
//mal -> golem
console.log(points.sort(function(a, b){return a - b}))
//golem -> mal
console.log(points.sort(function(a, b){return b - a}))

console.log(points.sort(function(a, b){return 0.5 - Math.random()}))




// najdi najmal ili najgolem broj

function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}


function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}

console.log('max',myArrayMax(points),'min',myArrayMin(points))


const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

 cars.sort(function(a, b){return a.year - b.year}); 
 console.log(cars)


 cars.sort(function(a, b){
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
}); 
 console.log(cars)
*/

 /*
Method 			Description
--------------------------------------------------------------------------------------------------
concat() 		Joins two or more arrays, and returns a copy of the joined arrays
copyWithin() 	Copies array elements within the array, to and from specified positions
entries() 		Returns a key/value pair Array Iteration Object
every() 		Checks if every element in an array pass a test
fill() 			Fill the elements in an array with a static value
filter() 		Creates a new array with every element in an array that pass a test
find() 			Returns the value of the first element in an array that pass a test
findIndex() 	Returns the index of the first element in an array that pass a test
forEach() 		Calls a function for each array element
from() 			Creates an array from an object
includes() 		Check if an array contains the specified element
indexOf() 		Search the array for an element and returns its position
isArray() 		Checks whether an object is an array
join() 			Joins all elements of an array into a string
keys() 			Returns a Array Iteration Object, containing the keys of the original array
lastIndexOf() 	Search the array for an element, starting at the end, and returns its position
map() 			Creates a new array with the result of calling a function for each array element
pop() 			Removes the last element of an array, and returns that element
push() 			Adds new elements to the end of an array, and returns the new length
reduce() 		Reduce the values of an array to a single value (going left-to-right)
reduceRight() 	Reduce the values of an array to a single value (going right-to-left)
reverse() 		Reverses the order of the elements in an array
shift() 		Removes the first element of an array, and returns that element
slice() 		Selects a part of an array, and returns the new array
some() 			Checks if any of the elements in an array pass a test
sort() 			Sorts the elements of an array
splice() 		Adds/Removes elements from an array
toString() 		Converts an array to a string, and returns the result
unshift() 		Adds new elements to the beginning of an array, and returns the new length
valueOf() 		Returns the primitive value of an array*/