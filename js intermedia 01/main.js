
document.querySelectorAll('.tab').forEach((tab) => {
	tab.addEventListener('click',function(tab){
		let id = tab.target.id
		console.log(id)
		let contentWrapper = document.querySelector('.tabsContentWrapper')
		contentWrapper.querySelector('.active')?.classList.remove("active")
		contentWrapper.querySelector('#'+ id)?.classList.add('active')
	})
})


/*OBICHEN SLAJDER TUKA*/

