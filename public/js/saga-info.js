//Variables del storage
let volID = localStorage.getItem("id_vol");
let tempID = localStorage.getItem("id_temp");
let List = document.getElementById("mangaList");
////////////////////Redirección/////////////////////
function redirectTemp(id){
    localStorage.setItem("id_vol", id);
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
    console.log(tempID);
    document.getElementById("titulo").innerHTML = "Volumen #" + (parseInt(volID)+1);
    document.getElementById("title").innerHTML = "Volumen #" + (parseInt(volID)+1);
    document.getElementById("desc_saga").innerHTML = data[tempID][volID].vol[0].plot;
    for(let i = 0; i < data[tempID][volID].vol[0].mangas.length; i++){
        let nodo = document.createElement("div");
        nodo.setAttribute("class", "tomoManga");
        let upperDiv = document.createElement("div");
        upperDiv.setAttribute("class", "imagenManga");
        upperDiv.innerHTML = `<img class='compraImg' src=${data[tempID][volID].vol[0].mangas[i].img}>`;
        nodo.appendChild(upperDiv);
        let innerDiv = document.createElement("div");
        innerDiv.setAttribute("class", "tituloManga");
        innerDiv.innerHTML += `<h3>${data[tempID][volID].vol[0].mangas[i].nombre}</h3>`;
        innerDiv.innerHTML += `<h4>Tomo #${data[tempID][volID].vol[0].mangas[i].tomo}</h4>`;
        nodo.appendChild(innerDiv);
        let downDiv = document.createElement("div");
        downDiv.setAttribute('class', 'compraManga');
        downDiv.innerHTML += `
        <button id="${data[tempID][volID].vol[0].mangas[i].tomo}" type="button" class="btn btn-warning comprar"><i class="fa-solid fa-cart-shopping"></i></button>
        `;
        nodo.appendChild(downDiv);
        List.appendChild(nodo);
    }

    const buyMangas = document.querySelectorAll('.comprar');
    buyMangas.forEach(manga => {
        manga.addEventListener('click', ()=>{
            let mangasCompra = JSON.parse(localStorage.getItem('listaCompraManga')) || [];
            mangasCompra.push({tomo:parseInt(manga.id), vol:parseInt(volID), saga:tempID});
            localStorage.setItem('listaCompraManga', JSON.stringify(mangasCompra));
            window.location.href = '/cart';
        })
    });    
})
//////////////////////////////////////////////////