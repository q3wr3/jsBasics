document.querySelector('.navPrev').addEventListener('click',function(){
	var slider = document.querySelector('.slides')
	var fullW = slider.scrollWidth
	var allSlides = slider.children.length;
	var sliding = fullW / allSlides;

	var pos = slider.getBoundingClientRect();
	var currentSlide = slider.querySelector('.active')
	var newLeft = parseInt(slider.style.left) - sliding;
	
})