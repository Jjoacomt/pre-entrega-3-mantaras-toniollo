// la idea principal de esta entrega es crear algo que YO uso diariamente pero en papel, un lugar en el cual pueda anotar lo que voy haciedno diariamente y asi llevar un poco mas planificado y ordenado mi dia, es basicamente un anotador pero personas, en caso de que decida mejorar esto para el rproyecto final creo que peude tener una utilidad bastante buena ya que estar organizado es bastante util.

// Para esti usaria un array en elq ue se guarden mis actividades realizadas, un funcion encargada de almacenarlo en el array, y el locale storage con intencion de que quede almacenado.

// FUNCIONES
let saveInArray = () => {
    income.innerHTML = ""
    today.forEach(function(act){

    income.innerHTML += ` Activity: ${act.Activity} <br/> Hour:${act.Date}<br/>`
    })
}


// LETS
let today = []

let answer = document.getElementById("activity")
let  add = document.getElementById("add")
let income = document.getElementById("added")
let clear = document.getElementById("clear")

// VUELTA DEL STORAGE
window.onload = function(){
    let save = localStorage.getItem("saveItem")

    if(save){
        today = JSON.parse(save)
        saveInArray()
    }
}

// EVENTOS
clear.addEventListener("click", function(){

    localStorage.clear()
    location.reload()
})



add.addEventListener("click", function(){

    let input = answer.value.toLowerCase()
    

    let object = {
        Activity:input,
        Date:new Date().toLocaleString()
    }
    answer.value = ""
    income.innerHTML = ` Activity: ${object.Activity} <br/> Hour:${object.Date}`

    localStorage.setItem("saveItem", JSON.stringify(today))
    
    today.push(object)

    saveInArray()
})


