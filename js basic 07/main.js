// Semantika i preporaki

//	Deklaracija na varijabli
// - camelCase
// - site varijabli pochnuvat so mala bukva (nikogash brojka)


let imePrezime = ''
let prvBroj = 24

// prazno mesto posle operator

let x + y = z
let arr = [x, y, z]

// indentacija 
// preporachlivo e da se koristat barem 2 prazni mesta posle sekoj skope odnosno vgnezduvanje

function indent(){
	let prvoVgnezduvanje = [
		'vtoro vgnezduvanje',
		[
			'treto',
			'treto2',
			{
				chetvrto : {
					petto : 'vgnezduvanje i tn'
				}
			}
		]
	]
}


// preporaka - posle sekoj statement (iskaz) zavrshete so   
// otvaranje na skope { da e vo ist red so iskazot za toj skope
function toCelsius(fahrenhafdseit) {
  return (5 / 9) * (fahrenheit - 32)
}

for (let i = 0; i < 5;i++) {
  x += i
}

if (time < 20) {
  str = "Dobrutro"
} else {
  str = "Vecher"
}

// generalni pravila

// otvaranje na golema zagrada (scope) na istata linija so imeto na objekt
// koristi : i prezno mesto pred dodeluvanje vrednost na kluch
// ne dodavaj zapirka posle posledniot element od objektot
// zatvori go objetkot na nova linija (} na nov red sam ...)
// sekogash iskazot da zavrshi so 

const user = {
  firstName   :   "Cane",
  lastName    :   "Brzio",
  age         :   50,
  eyeColor    :   "kakana"
} 

// kondenziran nachin...
const user = {firstName: "Cane", lastName: "Brzio", age: 50, eyeColor: "kakana"} 


// Imenuvanje
// varijabli i funkcii so camelCase
// globalni promenlivi so CAPS (site golemi bukvi)
// klasi so prva Golema bukva (Pascal Case)

class ProdavnicaZaIgrachki {

}



/*Izbegnuvajte globalni varijabli, new , == i eval() */


// globalnite varijabli mozhat da bidat prepishani od drugi skripti na stranata !

/*Deklaracija na varijabli na pochetok od fajl funkcija ili klasa*/

/*inicijalizacija na varijabli*/

let x,y,z // losho

let q = ''
let w = 0
let arr = []
let obj = {}

/*Deklaracija na objekti kako konstanti*/

const ar = {p:'pece',k:'kire',s:'spase'}

// prevenira promena na tipot na promenliva i prepishvanje na istata

ar = 5 // nema da se dozvoli

/*
    koristi "" namesto new String()
    koristi 0 namesto new Number()
    koristi false namesto new Boolean()
    koristi {} namesto new Object()
    koristi [] namesto new Array()
    koristi /()/ namesto new RegExp()
    koristi function (){} namesto new Function()


*/


/*Koristi === za sporedba*/

0 == ""        // true
1 == "1"       // true
1 == true      // true

0 === ""       // false
1 === "1"      // false
1 === true     // false 


/*koristi defoltni parametri*/

function myFunction(x, y) {
  if (y === undefined) {
    y = 0
  }
}



function myFunc(x,y){
	y = y || 0
}


/*Switch da zavrshva so Default*/

switch (new Date().getDay()) {
  case 0:
    day = "Sunday"
    break
  case 1:
    day = "Monday"
    break
  case 2:
    day = "Tuesday"
    break
  case 3:
    day = "Wednesday"
    break
  case 4:
    day = "Thursday"
    break
  case 5:
    day = "Friday"
    break
  case 6:
    day = "Saturday"
    break
  default:
    day = "Drugiden"
}



// NAJVAZHNO ... izbegavajte koristenje na eval()
// zema string i go prevedva vo kod

// Otvoji index so test.js

