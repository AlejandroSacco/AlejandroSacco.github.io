let datos = [];

document.addEventListener("DOMContentLoaded", ()=>{
    fetch("jsondata/AllData.json")
    .then(response => response.json())
    .then(data => {
        document.getElementById("nombre").innerHTML = data[2].personajes[0][0].nombre;
    });

    
});