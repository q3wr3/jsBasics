/*let str1 = "stifler's mom";
let str2 = "stringot ima 'edinechni' navodnici";
let str3 = 'stringot ima "dupli" navodnici';


let strL = '0123456789dasfdasf adsfdas gads gdsg d sf sd f';
console.log('stringot ima ' + strL.length + ' karakteri');


let str4 = "Mile voli disko...";

let delche = str4.slice(4,18); //kako parametri se vnesuvaat poziciite za sechenje
let delche1 = str4.slice(4);
console.log(str4 + " -> " +delche+ " bez vtor parametar -> " + delche1)

console.log("so negativni vrednsti ->" + str4.slice(-13,-9)) //broenje od krajot na stringot



console.log(str4.substring(5,16)) // ne prima negativni vrednosti

console.log(str4.substr(5,12)) //prv parametar - pochetna pozicija, vtor parametar - broj na mesta posle pochetnata pozicija

*/
/*let zaZamena = "Vlada na RM, odluchi deka na 16ti RM ke bidi zatvorena za poseta od vonzemjani"
let prv = zaZamena.replace('RM','SRM');
console.log("pred :"+zaZamena+" | potoa: "+zaZamena.replace('RM','SRM'))

//zamena so REGEX (regular expression)

var zamenat = zaZamena.replace(/RM/g,'SRM')

console.log('rezultat so REgEx:',zamenat)

console.log('so golemi:',zamenat.toUpperCase())
console.log('so mali:',zamenat.toLowerCase())

var conkatanacija = zaZamena.concat("&&",zamenat," tret text")
console.log(conkatanacija)

*/

//trim

let tekst = "                Pece  0       ";







let cel = "mile voli disko"
let podelen = cel.split(' ')
podelen[0] = 'cane'
podelen[3] = ['mile','go','nema']
console.log(podelen)
let nazad = "";

console.log(nazad)

podelen.map(function(value,key,arr){

	/*nazad += str + " ";*/
	console.log(key,value,arr)
})

console.log(podelen.shift(),podelen,podelen.pop())

//console.log(nazad.trim())

let matrica = [
	{0:[1,2,3],prezime:'vrednostt'},
	{ime:'fd',prezime:'vrednfasdfaostt'},
	{ime:'adsf',prezime:'fdsfsad'},
	{ime:'vrednost',prezime:'vrednostt'},
	{ime:'vrednost',prezime:'vrednostt'},
	{ime:'vrednost',prezime:'vrednostt'},
]
	

console.log(matrica[0][0])