//Contenedores de series
let db = document.getElementsByClassName("db");
let dbz = document.getElementsByClassName("dbz");
let dbgt = document.getElementsByClassName("dbgt");
let dbs = document.getElementsByClassName("dbs");

////////////////////Redirección////////////////////
function redirect(id){
    localStorage.setItem("id_temp", id);
    window.location.href='/saga-index.html';
}

for(i = 0; i < db.length; i++){
    db[i].addEventListener("click", ()=>{
        redirect("db");
    })
}

for(i = 0; i < dbz.length; i++){
    dbz[i].addEventListener("click", ()=>{
        redirect("dbz");
    })
}

for(i = 0; i < dbgt.length; i++){
    dbgt[i].addEventListener("click", ()=>{
        redirect("dbgt");
    })
}

for(i = 0; i < dbs.length; i++){
    dbs[i].addEventListener("click", ()=>{
        redirect("dbs");
    })
}
///////////////////////////////////////////////////