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
    const response = await fetch("jsondata/AllData.json");
    const datos = await response.json();
    return datos;
}
/////////////////////////////////////////////////

////////////////////Show datos////////////////////
getDataDB().then(data =>{
    document.getElementById("titulo").innerHTML = data[tempID][0].titulo[sagaID];
    document.getElementById("title").innerHTML = data[tempID][0].titulo[sagaID];
    document.getElementById("desc_saga").innerHTML = data[tempID][1].plot[sagaID];
})
//////////////////////////////////////////////////