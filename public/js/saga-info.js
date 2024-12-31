//Variables del storage
let sagaID = localStorage.getItem("id_saga");
let tempID = localStorage.getItem("id_temp");
let List = document.getElementById("mangaList");

////////////////////Redirección////////////////////
function redirectTemp(id){
    localStorage.setItem("id_temp", id);
    window.location.href='/saga-index';
}
///////////////////////////////////////////////////

////////////////////Get datos////////////////////
async function getDataDB() {
    const response = await fetch("/jsondata/AllData.json");
    const datos = await response.json();
    return datos;
}
/////////////////////////////////////////////////

////////////////////Show datos////////////////////
getDataDB().then(data =>{
    console.log(data);
    document.getElementById("titulo").innerHTML = data[tempID][0].titulo[sagaID];
    document.getElementById("title").innerHTML = data[tempID][0].titulo[sagaID];
    document.getElementById("desc_saga").innerHTML = data[tempID][1].plot[sagaID];
    for(let i = 0; i < data[tempID][3].mangas[i].length; i++){
        let nodo = document.createElement("div");
        nodo.setAttribute("class", "prueba");
        let upperDiv = document.createElement("div");
        upperDiv.setAttribute("id", "barraAlta");
        upperDiv.innerHTML = `<img class='compraImg' src=${data[tempID][3].mangas[0][i].img}>`;
        nodo.appendChild(upperDiv);
        let innerDiv = document.createElement("div");
        innerDiv.setAttribute("class", "barraBaja");
        innerDiv.innerHTML += `<h3>${data[tempID][3].mangas[0][i].nombre}</h3>`;
        innerDiv.innerHTML += `<p>Tomo #${data[tempID][3].mangas[0][i].tomo}</p>`;
        nodo.appendChild(innerDiv);
        let downDiv = document.createElement("div");
        downDiv.setAttribute('id', 'ultimo');
        downDiv.innerHTML += `<button id="comprar">comprar</button>`;
        nodo.appendChild(downDiv);
        List.appendChild(nodo);
    }
})
//////////////////////////////////////////////////