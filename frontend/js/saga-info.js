//Variables del storage
let sagaID = localStorage.getItem("id_saga");
let tempID = localStorage.getItem("id_temp");

////////////////////Redirección////////////////////
function redirectTemp(id){
    localStorage.setItem("id_temp", id);
    window.location.href='/saga-index.html';
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
        document.getElementById("titulo").innerHTML = data[0].titulo[sagaID];
        document.getElementById("title").innerHTML = data[0].titulo[sagaID];
        document.getElementById("desc_saga").innerHTML = data[1].plot[sagaID];
    })
}
else if(tempID == "dbz"){
    getDataDBZ().then(data =>{
        document.getElementById("titulo").innerHTML = data[0].titulo[sagaID];
        document.getElementById("title").innerHTML = data[0].titulo[sagaID];
        document.getElementById("desc_saga").innerHTML = data[1].plot[sagaID];
    })
}
else if(tempID == "dbgt"){
    getDataDBGT().then(data =>{
        document.getElementById("titulo").innerHTML = data[0].titulo[sagaID];
        document.getElementById("title").innerHTML = data[0].titulo[sagaID];
        document.getElementById("desc_saga").innerHTML = data[1].plot[sagaID];
    })
}
else if(tempID == "dbs"){
    getDataDBS().then(data =>{
        document.getElementById("titulo").innerHTML = data[0].titulo[sagaID];
        document.getElementById("title").innerHTML = data[0].titulo[sagaID];
        document.getElementById("desc_saga").innerHTML = data[1].plot[sagaID];
    })
}
//////////////////////////////////////////////////