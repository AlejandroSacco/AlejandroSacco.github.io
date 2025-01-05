//Variables
let tempID = localStorage.getItem("id_temp");
let menu = document.getElementById("contenedorMenu");

////////////////////Redirección////////////////////
function redirectTemp(id){
    localStorage.setItem("id_temp", id);
    window.location.href='/saga-index';
}

function redirectSaga(id){
    localStorage.setItem("id_vol", id);
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
    for(let i = 0; i < data[tempID].length; i++){
        let nodo = document.createElement("div");
        nodo.setAttribute("class", "index");
        nodo.setAttribute("id", `${tempID}${i}`)
        nodo.innerHTML = `<img class='innerimg' src=${data[tempID][i].vol[0].img}>`;
        menu.appendChild(nodo);
        document.getElementById(`${tempID}${i}`).addEventListener("click", ()=>{
            redirectSaga(i);
        })
    }
})
//////////////////////////////////////////////////