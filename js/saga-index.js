//Variables
let tempID = localStorage.getItem("id_temp");
let menu = document.getElementById("contenedorMenu");

////////////////////Redirección////////////////////
function redirectTemp(id){
    localStorage.setItem("id_temp", id);
    window.location.href='/saga-index.html';
}

function redirectSaga(id){
    localStorage.setItem("id_saga", id);
    window.location.href='/saga-info.html';
}

document.getElementById("db").addEventListener("click", ()=>{
    redirectTemp("db");
})

document.getElementById("dbz").addEventListener("click", ()=>{
    redirectTemp("dbz");
})

document.getElementById("dbgt").addEventListener("click", ()=>{
    redirectTemp("dbgt");
})

document.getElementById("dbs").addEventListener("click", ()=>{
    redirectTemp("dbs");
})
///////////////////////////////////////////////////

////////////////////Get datos////////////////////
async function getData() {
    const response = await fetch("/jsondata/AllData.json",{ headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }});
    const datos = await response.json();
    return datos;
}
/////////////////////////////////////////////////

////////////////////Show datos////////////////////
getData().then(data =>{
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
})
//////////////////////////////////////////////////