let datos = [];

document.addEventListener("DOMContentLoaded", ()=>{
    fetch("/jsondata/AllData.json", { headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }})
    .then(response => response.json())
    .then(data => {
        document.getElementById("nombre").innerHTML = data[2].personajes[0][0].nombre;
    });

    
});