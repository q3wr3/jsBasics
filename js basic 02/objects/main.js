/**
 * Kreiraj objekt so podatoci
 * tie podatoci smesti gi vo soodvetnite mesta vo html kodot
 *
 * Podatoci:
 * 1. Link do slika
 * 2. Ime Prezime godini i broj
 * 3. Znaenja i sposobnosti
 * */

//

var user = {
        img: "https://via.placeholder.com/300x400?Text=markoTolevski",
        personalInfo : {
            ime: "Marko",
            prezime: "Tolevski", 
            godini : 29,
            broj : '075505395'
        },
        skills : [
            {
                skillName:"programiranje",
                skillLevel:"pro",
                skillYears:10
            },
            {
                skillName:"fudbal",
                skillLevel:"noob",
                skillYears:0
            },
            {
                skillName:"skijanje",
                skillLevel:"nublet",
                skillYears:2
            }
                    
        ]


      };


console.log(user)

document.querySelector('.slikata').setAttribute('src',user.img)
document.querySelector('.personal .ime').innerHTML = user.personalInfo.ime
document.querySelector('.personal .prezime').innerHTML = user.personalInfo.prezime
document.querySelector('.personal .godini').innerHTML = user.personalInfo.godini
document.querySelector('.personal .brojce').innerHTML = user.personalInfo.broj


var items = user.skills


items.map(function(item){
    var skill = document.createElement('div')
    skill.setAttribute('class' , 'parentot')
    skill.setAttribute('skill',item.skillName)

        var skillName = document.createElement('span')
        skillName.innerHTML = item.skillName
        skillName.style.border = "1px solid black";

        var skillYears = document.createElement('p')
        skillYears.innerHTML = item.skillYears
        skillYears.style.border = "1px solid blue";

        var skillLevel = document.createElement('div')
        skillLevel.innerHTML = item.skillLevel
        skillLevel.style.border = "1px solid green";

        skill.appendChild(skillName)
        skill.appendChild(skillYears)
        skill.appendChild(skillLevel)


    /*skill.style.fontSize = '20px'
    skill.style.backgroundColor = 'red'
    skill.innerHTML = "sakam " + item.skillName +" i aktivno se zanimavam so " + item.skillName + " veke " +item.skillYears + " godini, i sum "+ item.skillLevel*/
    document.querySelector('.skills').appendChild(skill)
    
    var style = document.createElement('style')
    style.textContent = '.parentot {background:lightgray;}'
    document.querySelector('head').appendChild(style)
})