

document.querySelector('.submit').addEventListener('click',function(){
	let ime = document.querySelector('.ime').value
	let pre = document.querySelector('.pre').value
	let user = {
		ime,
		pre
	}
	let data = JSON.stringify(user) 
	setCookie('user',data,1)
	console.log(data)
})



function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return false;
}

function checkCookie(name) {
  let cookie = getCookie(name);
  if (cookie != "") {
    return getCookie(name)
  } else {
    return false
  }
} 