document.querySelector('.navPrev').addEventListener('click',function(){

	let {sliderLeft,currentSlide,hasNext,hasPrev} = getParams()
	console.log(sliderLeft,currentSlide,hasNext,hasPrev)
	if (hasPrev){
		let slideW = currentSlide.getBoundingClientRect().width
		let newLeft = sliderLeft + slideW;
		document.querySelector('.slides').style.transform = 'translateX('+newLeft+'px)';
		currentSlide.previousElementSibling.classList.add('active')
		currentSlide.classList.remove('active')
	}

})


document.querySelector('.navNext').addEventListener('click',function(){

	let {sliderLeft,currentSlide,hasNext,hasPrev} = getParams()
	if (hasNext){
		let slideW = currentSlide.getBoundingClientRect().width
		let newLeft = sliderLeft - slideW;
		document.querySelector('.slides').style.transform = 'translateX('+newLeft+'px)';
		currentSlide.nextElementSibling.classList.add('active')
		currentSlide.classList.remove('active')
	}

})


function getParams(){
	var parent = document.querySelector('.slides')
	var currentSlide = document.querySelector('.active')
	var hasNext = currentSlide.nextElementSibling != null;
	var hasPrev = currentSlide.previousElementSibling != null;
	return {
		currentSlide : currentSlide,
		hasNext : hasNext,
		hasPrev : hasPrev,
		sliderLeft : parent.getBoundingClientRect().left
	}
}
