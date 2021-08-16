/**
 * 
 *   String.indexOf()		- baranje na pochetna pozicija na string koj go barame vo odreden string
 *   String.lastIndexOf()	- baranje na poslednata pochetna pozicija na string koj go barame vo odreden string
 *   String.startsWith()	- proverka dali odreden string pochnuva so nekoja sekvenca na karakteri
 *   String.endsWith()		- proverka dali odreden string zavrshuva so nekoja sekvenca na karakteri
 * 	 String.search()		- baranje na pochetna pozicija na string vo odreden string + RegEx mozhnost
 *   String.match() 		- prebaruva dali odreden string ili regex ekspresija postio vo string. Vrakja array so rezultatite
 *   String.includes() 		- proverka dali stringot sodrzhi odreden string
 */


let str = "eden sonchev den, na pece mu se jadeshe sendvich od kaj bombata. Toj den pece ojde kaj bombata i si zede hot-dog oti sendvichite gi poskapija";
/*
console.log('prva pozicija',str.indexOf("sonchev"))
console.log('posledna pozicija',str.lastIndexOf("den"))


console.log('dali pochnuva so "eden"? - ', str.startsWith('eden'))
console.log('dali zavrshuva so "tost"? - ', str.endsWith('tost'))


console.log(' search ',str.search('jadeshe'))
console.log(' search + regex ',str.search(/kaj bomba.*i si/g))


console.log(' barame sendvich - ', str.match(/jadeshe (.*?) od kaj/g))
console.log(' ima tost?', str.includes('tost'))
*/
/**

 * Vezhba
 */
 

let text = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek,"

/**
 * Najdi gi drzhavite bez da gi barash po ime
 * Najdi kolku tochki i kolku zapirki se iskoristeni
 * Najdi kolku karakteri se iskoristeni
 * izbroj kolku zboroj se iskoristeni
 * */

























/*String templejtiranje so `` */
/*
let ime = "Stale";
let prezime = "Popov";

let tex = `Здраво ${ime}, ${prezime}!`;



let header = "Темплејти";
let tags = ["javascript", "html", "templates"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;


console.log(html)
document.querySelector('.templejtiran').innerHTML = html
*/
/*
var sledenaLekcija = document.createElement('script')
sledenaLekcija.src = 'numbers.js';
document.getElementsByTagName('body')[0].appendChild(sledenaLekcija)
*/