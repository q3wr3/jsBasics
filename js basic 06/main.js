
let obj = {
  ime: "Cane",
  prez: "Nikolovski",
  dvete: function() {
    return this.ime + " " + this.prez;
  }
};

console.log(obj.dvete())
/*
let obj2 = {
  ime: "Cane",
  prez: "Nikolovski",
  dvete: function() {
    return this;
  }
};

console.log(obj2.dvete())


const choek = {
  imeprez: function() {
    return this.ime + " " + this.prez;
  }
}
const obj3 = {
  ime:"Pece",
  prez: "Na Jove",
}
console.log(choek.imeprez.call(obj3))


// Funkcii


function funkcija(){
	return 5
}


let x = function(){
	return 5;
}

let y = () => {
	return 5;
}

let z = () => 5; //samo so 1 deklaracija na return vrednost


console.log(funkcija(),x(),y(),z())

let xy = (ime) => "zdravo "+ ime;

console.log(xy('pece'))


var multi = {
	ime : 'imeto',
	prezime : 'prezimeto',
	kola : {
		brend : "bmw",
		model : 'x15-ka',
		potroshnja : {
			gredska : 4,
			selska	: 1
		}
	}
}

let rekurziva = (obj) => {
	let rez = "";
	for (x in obj){
		if (typeof obj[x] === 'object' && obj[x] !== null){
			rez += rekurziva(obj[x])
		}else{
			rez += x +' -> '+ obj[x] + " "
		}
	}

	return rez;

}

console.log(rekurziva(multi))






class user {
	constructor(ime,prezime,godini){
		this.ime = ime;
		this.prezime = prezime;
		this.godini = godini;
	}
}


let chojk = new user('pece','pecevski',15)

console.log(chojk)


class stepen{

	constructor(skill,skolija,sertifikat,ime,prezime){
		this.ime = ime;
		this.prezime = prezime;
		this.skill = skill;
		this.skolija = skolija;
		this.sertifikat = sertifikat;
	}

	pecati(){
		return this.ime + " "+ this.prezime +" se zdobi so sertifikat za zavrshen kurs " + this.skill + " so posetuvanje na " + this.skolija + ". br na sert.-" + this.sertifikat;
	}


	smeniSkill(skill){
		this.skill = skill
	}
}


let pisulche = new stepen('javascript','kimicom','21489hj4132','pece','pecevski')

console.log(pisulche.pecati())
pisulche.smeniSkill('html')
console.log(pisulche.pecati())*/




/*За домашно, форма за внесвање на продукти во продавница и листање по продавници на иститие

	product
		ime
		opis
		cena
		kolichina

	prodavnica
		ime
		lokacija
		produkti



*/