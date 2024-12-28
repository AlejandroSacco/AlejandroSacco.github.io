//Variables
let tempID = localStorage.getItem("id_temp");
let menu = document.getElementById("contenedorMenu");

////////////////////Redirección////////////////////
function redirectTemp(id){
    localStorage.setItem("id_temp", id);
    window.location.href='/saga-index';
}

function redirectSaga(id){
    localStorage.setItem("id_saga", id);
    window.location.href='/saga-info';
}
///////////////////////////////////////////////////

////////////////////Get datos////////////////////
async function getData() {
    const response = await fetch("/jsondata/AllData.json");
    const datos = await response.json();
    return datos;
}
/////////////////////////////////////////////////

////////////////////Show datos////////////////////
getData().then(data =>{
    console.log(data);
    for(let i = 0; i < data[tempID][0].titulo.length; i++){
        let nodo = document.createElement("div");
        if(i % 2 == 0){
            nodo.setAttribute("class", "index-right");
        }
        else{
            nodo.setAttribute("class", "index-left");
        }
        nodo.setAttribute("id", `${tempID}${i}`)
        nodo.innerHTML = `<img class='innerimg' src=${data[tempID][2].imgs[i]}>`;
        menu.appendChild(nodo);
        document.getElementById(`${tempID}${i}`).addEventListener("click", ()=>{
            redirectSaga(i);
        })
    }
    let nodo = document.createElement("div");
    nodo.setAttribute("class", "prueba");
    nodo.setAttribute("id", "temp");
    menu.appendChild(nodo);
    let upperDiv = document.createElement("div");
    upperDiv.setAttribute("class", "barraAlta");
    upperDiv.innerHTML = `<p>Dragon Ball</p>`;
    nodo.appendChild(upperDiv);
    let innerDiv = document.createElement("div");
    innerDiv.setAttribute("class", "barraBaja");
    innerDiv.innerHTML = `<p>Hola</p>`
    nodo.appendChild(innerDiv);
})
//////////////////////////////////////////////////