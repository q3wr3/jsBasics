document.querySelector('.fetchNew').addEventListener('click', function(){




	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://api.imgflip.com/get_memes', true);

	xhr.onload = function () {
		res = JSON.parse(xhr.response)
		let meminata = res.data.memes
		
		meminata.map((meme) =>{
			var singleMeme = document.createElement('div')
			singleMeme.classList.add('singleMeme')

			var title = document.createElement('div')
			title.classList.add('memeTitle')
			title.innerHTML = meme.name

			var img = document.createElement('img')
			img.src = meme.url

			singleMeme.appendChild(title)
			singleMeme.appendChild(img)
			document.querySelector('.wrapper').appendChild(singleMeme)
		})
	  console.log(res)
	};

	xhr.send(null);

	/*fetch('https://api.imgflip.com/get_memes',{
		method : "POST"
	})
	.then(res => res.json())
	.then((res) => {
		let meminata = res.data.memes
		
		meminata.map((meme) =>{
			var singleMeme = document.createElement('div')
			singleMeme.classList.add('singleMeme')

			var title = document.createElement('div')
			title.classList.add('memeTitle')
			title.innerHTML = meme.name

			var img = document.createElement('img')
			img.src = meme.url

			singleMeme.appendChild(title)
			singleMeme.appendChild(img)
			document.querySelector('.wrapper').appendChild(singleMeme)
		})

	})*/
	
})


