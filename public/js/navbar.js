const Ndb = document.getElementById('Ndb');
const Ndbz = document.getElementById('Ndbz');
const Ndbgt = document.getElementById('Ndbgt');
const Ndbs = document.getElementById('Ndbs');

function redirect(id){
  localStorage.setItem("id_temp", id);
  window.location.href='/saga-index';
}

Ndb.addEventListener("click", ()=>{
  redirect("db");
})

Ndbz.addEventListener("click", ()=>{
  redirect("dbz");
})

Ndbgt.addEventListener("click", ()=>{
  redirect("dbgt");
})

Ndbs.addEventListener("click", ()=>{
  redirect("dbs");
})