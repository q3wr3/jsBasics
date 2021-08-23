class produkt {
	constructor(ime,opis,cena,kolichina){
		this.ime = ime;
		this.opis = opis;
		this.cena = cena;
		this.kolichina = kolichina;
	}

	update(sho,val){
		switch(sho){
			case "ime":
			this.ime = val
			break;
			case "opis":
			this.opis = val
			break;
		}
		
	}

}

class prodavnica{
	constructor(ime,lokacija,produkti){
		produkti = produkti || []
		this.ime = ime;
		this.lokacija = lokacija;
		this.produkti = produkti
	}
}

var sitePordav = []

var vero = new prodavnica('vero','ondepogore',[new produkt("ime","opis",100,6)])

sitePordav.push(vero)