let datos = [];

document.addEventListener("DOMContentLoaded", ()=>{
    fetch("http://localhost:3000/dbz")
    .then(response => response.json())
    .then(data => {
        document.getElementById("nombre").innerHTML = data[2].personajes[0][0].nombre;
    });

    
});