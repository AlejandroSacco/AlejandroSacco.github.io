let cart = [];
let container = document.getElementById('cont');
let listaCompraManga = JSON.parse(localStorage.getItem('listaCompraManga')) || [];

async function getDataDB() {
	const response = await fetch("/jsondata/AllData.json");
	const datos = await response.json();
	return datos;
}

getDataDB().then(data=>{
    listaCompraManga.forEach((manga, index) => {
        const mangaData = data[manga.saga][manga.vol].vol[0].mangas.find(m => m.tomo == manga.tomo);
        if (mangaData) {
            let item = document.createElement('div');
            item.setAttribute('class', 'cartItem');
            item.setAttribute('id', "item"+index);
            item.innerHTML = `
                <img class="cartImg" src="${mangaData.img}">
                <h4>${mangaData.nombre}</h4>
                <i id="${index}-" class="fa-solid fa-minus"></i>
                <output id="quantity${index}">1</output>
                <i id="${index}+" class="fa-solid fa-plus"></i>
                <h4 id="price${index}"> ${mangaData.price} $UYU</h4>
                <button id="delete${index}" type="button" class="btn btn-danger delete"><i class="fa-solid fa-trash"></i></button>
            `;
            container.appendChild(item);
        }
    });
    listaCompraManga.forEach((manga, index) => {
        const mangaData = data[manga.saga][manga.vol].vol[0].mangas.find(m => m.tomo == manga.tomo);
        document.getElementById(index+'+').addEventListener('click', ()=>{
            document.getElementById("quantity"+index).innerHTML = parseInt(document.getElementById("quantity"+index).innerHTML)+1;
            document.getElementById("price"+index).innerHTML = parseInt(document.getElementById("quantity"+index).innerHTML)*parseInt(mangaData.price) + " $UYU";
        });
        document.getElementById(index+'-').addEventListener('click', ()=>{
            if(parseInt(document.getElementById("quantity"+index).innerHTML) > 1){
                document.getElementById("quantity"+index).innerHTML = parseInt(document.getElementById("quantity"+index).innerHTML)-1;
                document.getElementById("price"+index).innerHTML = parseInt(document.getElementById("quantity"+index).innerHTML)*parseInt(mangaData.price) + " $UYU";                
            }
        });
        document.getElementById("delete"+index).addEventListener('click', ()=>{
            container.removeChild(document.getElementById('item'+index));
            listaCompraManga.splice(index, index);
            localStorage.setItem('listaCompraManga', JSON.stringify(listaCompraManga));
        })
    }); 
});