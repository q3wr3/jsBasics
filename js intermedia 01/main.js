
document.querySelectorAll('.tab').forEach((currentTab) => {
	currentTab.addEventListener('click',function(clickot){

		let id = clickot.target.id
		console.log(id)
		let contentWrapper = document.querySelector('.tabsContentWrapper')
		contentWrapper.querySelector('.active')?.classList.remove("active")
		contentWrapper.querySelector('#'+ id)?.classList.add('active')
	})
})


/*OBICHEN SLAJDER TUKA*/



let slider = document.querySelector('.slides')

document.querySelector('.navLeft').addEventListener('click',function(ev){
	let slides = slider.querySelectorAll('img')
	let current = slider.querySelector('img.current')

	if (current === slides[0]){
		ev.target.style.pointerEvents = 'none'
		ev.target.style.backgroundColor = 'black'
		return;
	} 

	current.previousElementSibling.classList.add('current')
	current.classList.remove('current')

	let check2 = slider.querySelector('img.current')

	if (check2 === slides[0]){
		ev.target.style.pointerEvents = 'none'
		ev.target.style.backgroundColor = 'black'
		return;
	} 

})


document.querySelector('.navRight').addEventListener('click',function(){
	let slides = slider.querySelectorAll('img')
	let current = slider.querySelector('img.current')

	if (current === (slides[slides.length -1])) return;

	current.nextElementSibling.classList.add('current')
	current.classList.remove('current')

})