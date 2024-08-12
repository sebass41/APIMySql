window.onload = async ()=>{
    let productos = await obtener();
    mostrar(productos);
    console.log(productos);
}

async function obtener(){
    let url = "https://api.mercadolibre.com/sites/MLU/search?category=MLU1144";
    
    let consulta = await fetch(url);
    let datos = await consulta.json();
    console.log(datos);
    let productos = datos.results;
   return productos;
}

function mostrar(productos){
    let tBodyProductos = document.querySelector("#tBodyProductos");
    tBodyProductos.innerHTML = "";
    productos.forEach(producto => {
        let tr = document.createElement("tr")
        tr.innerHTML+= `
        
            <td>${producto.title}</td>
            <td>${producto.permalink}</td>
            <td><img src="${producto.thumbnail}"></td>
            <td>${producto.price}</td>
            
        `;
        let btn = document.createElement("button")
        btn.onclick = guardar(productos);
        let td = document.createElement("td");
        td.appendChild(btn);
        tr.appendChild(td);
        tBodyProductos.appendChild(tr);
    });
}

function guardar(producto){
    let url = "";
}