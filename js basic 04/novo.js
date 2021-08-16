

let x = ['eden','dva','tri']



for(i=0;i<=(x.length-1);i++){
	console.log(x[i])
}

x.forEach(function(y){
	console.log(y)
})


for(const y of x){
	console.log(y)
}

x.map(function(y){
	console.log(y)
})

x.map((y)=>{
	console.log(y)
})