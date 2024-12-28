//Contenedores de series
let db = document.getElementById("db");
let dbz = document.getElementById("dbz");
let dbgt = document.getElementById("dbgt");
let dbs = document.getElementById("dbs");

////////////////////Redirección////////////////////
function redirect(id){
    localStorage.setItem("id_temp", id);
    window.location.href='/saga-index';
}

db.addEventListener("click", ()=>{
    redirect("db");
})

dbz.addEventListener("click", ()=>{
    redirect("dbz");
})

dbgt.addEventListener("click", ()=>{
    redirect("dbgt");
})

dbs.addEventListener("click", ()=>{
    redirect("dbs");
})
///////////////////////////////////////////////////