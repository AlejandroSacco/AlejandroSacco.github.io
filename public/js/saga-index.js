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
    upperDiv.setAttribute("id", "barraAlta");
    upperDiv.innerHTML = `<img class='innerimg' src=${data["db"][3].mangas[0][1].img}>`;
    nodo.appendChild(upperDiv);
    let innerDiv = document.createElement("div");
    innerDiv.setAttribute("class", "barraBaja");
    innerDiv.innerHTML += `<h3>${data["db"][3].mangas[0][1].nombre}</h3>`;
    innerDiv.innerHTML += `<p>Tomo #${data["db"][3].mangas[0][1].tomo}</p>`;
    nodo.appendChild(innerDiv);
    let downDiv = document.createElement("div");
    downDiv.setAttribute('id', 'ultimo');
    downDiv.innerHTML += `<button id="comprar">comprar</button>`;
    nodo.appendChild(downDiv);
})
//////////////////////////////////////////////////