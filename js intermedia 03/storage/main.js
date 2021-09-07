/**
 * Local Storage & Session Storage
 * 
 **/

let ime = sessionStorage.getItem('Ime') // podatocite se zachuvani se dodeka ne se zatvori prebaruvachot
let pre = localStorage.getItem('Ime') // podatocite se zachuvani se dodeka ne se izbrishat ... ili dur ne reshat deka e security risk i da go zabranat...

alert('Session - '+ime+' & Local - '+pre)

sessionStorage.setItem('Ime','Kire')



localStorage.setItem('stream','Kirejca')

