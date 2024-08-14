window.onload = async ()=>{
    let productos = await obtener();
    await mostrar(productos);
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
            <td><a href="${producto.permalink}" target="_blank">Link del Producto</a></td>
            <td><img src="${producto.thumbnail}"></td>
            <td>${producto.price}</td>
            
        `;
        let btn = document.createElement("button")
        btn.onclick = ()=>{guardar(producto)};
        let td = document.createElement("td");
        td.appendChild(btn);
        tr.appendChild(td);
        tBodyProductos.appendChild(tr);
    });
}

async function guardar(producto){
    console.log(producto);
    let url = "http://localhost/APIMySql/backend/controller/Producto.php?fun=guardar";
    let formData = new FormData();
    
    formData.append("id", producto.id);
    formData.append("title", producto.title);
    formData.append("link", producto.permalink);
    formData.append("img", producto.thumbnail);
    formData.append("price", producto.price);

    let config = {
        method: 'POST',
        body: formData
    }

    let respuesta = await fetch(url, config);
    let rec = await respuesta.json();
    console.log(rec);
}