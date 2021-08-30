prodavnici = [] 

class Prodavnica{
    constructor(ime,lokacija,produkti){
		this.ime = ime
		this.lokacija = lokacija
		this.produkti = produkti
	}
}
class Produkt {
	constructor(ime,opis,cena,kolichina){
		this.ime = ime
		this.opis = opis
		this.cena = cena
		this.kolichina = kolichina
	}

}


document.querySelector(".btnProdavnica").addEventListener('click', function(){
    let prodavnicaIme = document.querySelector(".novaProdavnica").value
    document.querySelector(".novaProdavnica").value =""
    let prodavnicaLokacija = document.querySelector(".lokacija").value
    document.querySelector(".lokacija").value =""

    
    let prodavnica = new Prodavnica(prodavnicaIme,prodavnicaLokacija,[])
    prodavnici.push(prodavnica)
    update()

})




function update(){
    let target = document.querySelector(".siteProdavnici")
    target.innerHTML = ""
    // let target1 = document.querySelector("siteProdavnici .siteProdukti")
    // target1.innerHTML = ""

    for (x in prodavnici){
        var prodavnicata = document.createElement("div")
        prodavnicata.classList.add("prodavnica")
        prodavnicata.id = 'prod'+x

        var prodavnicataContent = document.createElement('p')
        prodavnicataContent.innerHTML = "Име на продавница: " + prodavnici[x].ime
    

        var lokacijata = document.createElement('p')
        lokacijata.innerHTML = "Локација: " + prodavnici[x].lokacija
        
        prodavnicata.appendChild(prodavnicataContent)
        prodavnicata.appendChild(lokacijata)
        
        let produkti = prodavnici[x].produkti
        let novProduct = document.createElement('div')
        let productName = document.createElement('input')

        productName.type = 'text'
        productName.classList.add('novProdukt')
        novProduct.appendChild(productName)

		let opis = document.createElement('input')
        opis.type = 'text'
        opis.classList.add('opis')
        novProduct.appendChild(opis)

		let cena = document.createElement('input')
        cena.type = 'text'
        cena.classList.add('cena')
        novProduct.appendChild(cena)

		let kolichina = document.createElement('input')
        kolichina.type = 'text'
        kolichina.classList.add('kolichina')

        novProduct.appendChild(kolichina)

        let addNew = document.createElement('button')
        let id = x
        console.log(id)
        addNew.setAttribute('onclick','addProductot('+id+')')
        addNew.textContent = "OVDE"
        novProduct.appendChild(addNew)
        novProduct.classList.add('addProduct')
        prodavnicata.appendChild(novProduct)



        let prod = document.createElement('div')
        prod.classList.add('produkti')
        for(j in produkti){
                // var produktot = document.createElement("div")
                // produktot.classList.add("produkt")
                // produktot.id = j
                let singleProdukt = document.createElement('div')
                singleProdukt.classList.add('singleProdukt')

                var imeto = document.createElement('p')
                imeto.innerHTML = "Име на продукт: " + produkti[j].ime

                var opisot = document.createElement('p')
                opisot.innerHTML = "Опис: " + produkti[j].opis

                var cenata = document.createElement('p')
                cenata.innerHTML = "Цена: " + produkti[j].cena

                var kolichinata = document.createElement('p')
                kolichinata.innerHTML = "Количина " + produkti[j].kolichina  
                singleProdukt.appendChild(imeto)
                singleProdukt.appendChild(opisot)
                singleProdukt.appendChild(cenata)
                singleProdukt.appendChild(kolichinata)
                prod.appendChild(singleProdukt)

        }
        prodavnicata.appendChild(prod)
        target.appendChild(prodavnicata)
        console.log(prodavnici)
    }

    // 

}

function addProductot(id) {
	let proddd = document.querySelector('#prod'+id)
    let imeNaProdukt = proddd.querySelector(".novProdukt").value
    let opisNaProdukt = proddd.querySelector(".opis").value
    let cena = proddd.querySelector(".cena").value
    let kolichina = proddd.querySelector(".kolichina").value
    let produkt = new Produkt(imeNaProdukt,opisNaProdukt,cena,kolichina)

    prodavnici[id].produkti.push(produkt)
    update()
}
