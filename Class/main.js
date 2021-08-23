let allTasks = {};
let i = 0;
class todo {
	constructor(task,done,date){
		this.task = task;
		this.done = done;
		this.time = date;
	}

	isDone(done){
		this.done = !done;
	}


}


document.querySelector(".btnSaveNew").addEventListener('click',function(){
	let newTask = document.querySelector('.newEntry').value
	document.querySelector('.newEntry').value = ""
	let nTask = new todo(newTask,false,Date())
	console.log(nTask)
	allTasks[i] = nTask;
	i++;
	update()
})

function update() {
	let target = document.querySelector('.siteTodo')
	target.innerHTML = ""
	for (x in allTasks){
		var taskot = document.createElement('div')
		taskot.classList.add('task')
		taskot.id = x

		var taskContent = document.createElement('p')
		taskContent.innerHTML = allTasks[x].task

		var isDone = document.createElement('input')
		isDone.setAttribute('type','checkbox')
		isDone.setAttribute('onClick','updateTask(this)')
		console.log(allTasks[x].done)
		if (allTasks[x].done){
			isDone.checked = true;
		}else{
			isDone.checked = false;
		}

		/*var datumo = document.createElement('p')
		datumo.innerHTML(allTasks[x].date)*/


		taskot.appendChild(taskContent)
		/*taskot.appendChild(datumo)*/
		taskot.appendChild(isDone)
		target.appendChild(taskot)
	}
}

function updateTask(el) {
	let id = el.parentNode.id
	allTasks[id].isDone(allTasks[id].done)
}