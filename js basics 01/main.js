/*
var 	Декларирање на променлива
let 	Декларирање на блок променлива
const 	Декларирање на блок константа
if 		Блок од операции кои ке се извршат при исполнување на услов
switch 	Блок од операции кои ке се извршат при исполнување на предходно дефинирани ситуации
for 	Блок од операции кои ке се извршат во циклус
function 	Декларирање на функција
return 	Враќа вредност од блок
try		Имплементира ерор хендлер за блок операции
*/
/*===========================================================*/

/*var x; //Deklariranje
x = 6; //Dodavanje vrednost

let y; //Deklariranje
x = 6; //Dodavanje vrednost


const z = 10; //Deklaracija na konstanta so vrednost*/

// varijablite deklarirani so let ne mozhi da se redeklarirat

/*SCOPE na var i let*/

/*{
	var g = 10
}
console.log(g) // 10

{
	let f = 10
}

{
	let f = 5
	console.log(f)
}
console.log(f) // ne postoj*/

/*===========================================================*/

/*ARITMETICHKI OPERACII*/
/*KONTATANACIJA ++*/
/*
var a,b,c;

a = 5;
b = 3;
*/
/*c = a + b;

console.log('збирот од '+ a +' и '+ b +' е еднаков на ' + c)
*/

/*c = a - b;
console.log('разликата од '+ a +' - '+ b +' е еднаков на ' + c)


console.log(a-b)
console.log(a/b)
*/

/*let prezime, Prezime;
Prezime = "aleksic";
prezime = "aleksovski";

console.log(prezime, Prezime)


var moetoIme = "Cane";
document.getElementById("ime").innerHTML = moetoIme; */

/*OBJECT Types*/
/*
let santimi = 16; // Number
let prezime = "Svetoslav"; // String
*/
//let x = {ime:"Stojan", prezime:"Pecovski"};    // Object
/*let x = { 	
			ime: 
			{ 
				ime: "stojan", 
				prekar: "Stefan" ,
				treto : {nivo:3}
			},
			prezime: "Pecovski" 
		}; // Object

let {prezime} = x;

console.log(prezime)*/

//let a = Array('pece','test')

/*
let a = ['pece','tost']
console.log(a)*/

/////////////////////////////////////////////////////////// Funkciiii


/*
function f(x,y){
	if (x < 10){
		return(x + y);
	}
	
}


console.log(f(5,6));

*/



/*
function f(x,y){
	var z = x+1;
	if (x < 10){
		return(x + y);
	}else if(z > 10 && z < 15){
		return(x-y);
	}else if() {
		return 'Sho da pram...';
	}
	
}


console.log(f(13,10));
*/



/*
function f(x){
	switch(x){
		case 5:
			return 'brojot e 5' 
		break;
		case 6:
			return 'brojot ne e 5' 
		break;
		case 'deset':
			return 'brojot e 10' 
		break;
		default:
			return 'ne znam sho e';
		break;
	}
	
}


console.log(f(6));
*/

/*
function f(x,y){
	y = y || false;

	if (y){
		return 'vtora funkcionalnost'
	}

	return x;
	
}


console.log(f(5,6))
*/

/*
function f(x,y){
	
	rez = x + y;
	return rez;
	
}

document.getElementById("rez").addEventListener('click',function(){
	var prv = document.getElementById('prv').value
	var vtor = document.getElementById('vtor').value

	this.innerHTML = f(prv,vtor);
})
*/

function f(x,y){
	
	rez = (x + " " + y);
	return rez;
	
}

document.getElementById("rez").addEventListener('click',function(e){
	var prv = document.getElementById('prv').value
	var vtor = document.getElementById('vtor').value
	var operand = document.querySelector('[type="checkbox"]:checked')
	this.style.width = prv+"px";
	this.style.height = vtor+"px";
	this.style.backgroundColor = 'red';
	console.log(operand)

	this.innerHTML = f(prv,vtor);
})

