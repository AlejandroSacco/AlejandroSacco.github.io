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
async function getDataDB() {
    const response = await fetch("http://localhost:3000/db");
    const datos = await response.json();
    return datos;
}

async function getDataDBZ() {
    const response = await fetch("http://localhost:3000/dbz");
    const datos = await response.json();
    return datos;
}

async function getDataDBGT() {
    const response = await fetch("http://localhost:3000/dbgt");
    const datos = await response.json();
    return datos;
}

async function getDataDBS() {
    const response = await fetch("http://localhost:3000/dbs");
    const datos = await response.json();
    return datos;
}
/////////////////////////////////////////////////

////////////////////Show datos////////////////////
if(tempID == "db"){
    getDataDB().then(data =>{
        for(let i = 0; i < data[0].titulo.length; i++){
            let nodo = document.createElement("div");
            if(i % 2 == 0){
                nodo.setAttribute("class", "index-right");
            }
            else{
                nodo.setAttribute("class", "index-left");
            }
            nodo.setAttribute("id", `db${i}`)
            nodo.innerHTML = `<img class='innerimg' src=${data[2].imgs[i]}>`;
            menu.appendChild(nodo);
            document.getElementById(`db${i}`).addEventListener("click", ()=>{
                redirectSaga(i);
            })
        }
    })
}
else if(tempID == "dbz"){
    getDataDBZ().then(data =>{
        for(let i = 0; i < data[0].titulo.length; i++){
            let nodo = document.createElement("div");
            if(i % 2 == 0){
                nodo.setAttribute("class", "index-right");
            }
            else{
                nodo.setAttribute("class", "index-left");
            }
            nodo.setAttribute("id", `dbz${i}`)
            nodo.innerHTML = `<img class='innerimg' src=${data[2].imgs[i]}>`;
            menu.appendChild(nodo);
            document.getElementById(`dbz${i}`).addEventListener("click", ()=>{
                redirectSaga(i);
            })
        }
    })
}
else if(tempID == "dbgt"){
    getDataDBGT().then(data =>{
        for(let i = 0; i < data[0].titulo.length; i++){
            let nodo = document.createElement("div");
            if(i % 2 == 0){
                nodo.setAttribute("class", "index-right");
            }
            else{
                nodo.setAttribute("class", "index-left");
            }
            nodo.setAttribute("id", `dbgt${i}`)
            nodo.innerHTML = `<img class='innerimg' src=${data[2].imgs[i]}>`;
            menu.appendChild(nodo);
            document.getElementById(`dbgt${i}`).addEventListener("click", ()=>{
                redirectSaga(i);
            })
        }
    })
}
else if(tempID == "dbs"){
    getDataDBS().then(data =>{
        for(let i = 0; i < data[0].titulo.length; i++){
            let nodo = document.createElement("div");
            if(i % 2 == 0){
                nodo.setAttribute("class", "index-right");
            }
            else{
                nodo.setAttribute("class", "index-left");
            }
            nodo.setAttribute("id", `dbs${i}`)
            nodo.innerHTML = `<img class='innerimg' src=${data[2].imgs[i]}>`;
            menu.appendChild(nodo);
            document.getElementById(`dbs${i}`).addEventListener("click", ()=>{
                redirectSaga(i);
            })
        }
    })
}
//////////////////////////////////////////////////