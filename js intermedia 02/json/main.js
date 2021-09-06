var users = [
	{	
		name 	: 'marko',
		lname 	: 'Tolevski',
		id 		: 1,
		skills 	: {
			html 	: 1,
			css 	: 2,
			js 		: 3,
			php 	: 4,
			mySql   : 5,
			node 	: 6

		},
		projects : [
			{
				name: 'slider',
				description : 'makes the slider move like jager',
				usedSkills : [0,1,2],
				link	: ''
			},
			{
				name: 'tic-tak-toe',
				description : 'simple game',
				usedSkills : [0,1,2],
				link	: ''
			},
		],
		isActive : 1,
		url		 : 'https://github.com/q3wr3'
	},
]


var json = JSON.stringify(users)
console.log(json)

console.log(JSON.parse(json))

var theUsers = JSON.parse(json)

console.log(theUsers[0].name)


/*		
		https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/

		Drzhavi i info 	- https://restcountries.eu/
		Memina 			- https://imgflip.com/api
		Fake useri 		- https://randomuser.me/api/
		Exchange Rates 	- https://open.er-api.com/v6/latest/USD
		Arhiva na knigi - https://archive.readme.io/docs


*/