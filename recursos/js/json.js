// Se define el objeto del botón cargarJSON en JavaScript
//Se crea la función para el evento click del cargarJSON
    //Se crea la instancia del API XMLHttpRequest 
    let jsonReq = new XMLHttpRequest();

    jsonReq.onload = function (){ //cambiar el envento a onload
        if (this.readyState === 4 && this.status === 200){
            leerDetalles (this);
        } else
            console.log ('Error al cargar los datos');
    };

    jsonReq.open ('GET', 'http://localhost:5500/detalleCateg.json', true);
    //Se define que la respuesta es tipo JSON
    jsonReq.responseType = 'json'; 
    jsonReq.send();

//Esta función debe leer cada información del JSON
function leerDetalles (jsonObj){
    let valoresJson = jsonObj.response;

    //console.log (valoresJson);

    let listaDetalles = valoresJson.detalles;

    let tagListado = document.getElementById ('listaJSON');

    tagListado.innerHTML = '';
    listaDetalles.forEach(element => {
        let tagCategoria = document.createElement('h2');
        let tagProducto = document.createElement('h3');
        let tagDisponible = document.createElement('span');
        let tagTemporada = document.createElement('p');
        let tagDescripcion = document.createElement('p');
        let tagEnter = document.createElement('br');

        tagCategoria.innerHTML = element.categoria;
        tagProducto.innerHTML = element.producto;
        tagDisponible.innerHTML = element.disponible; 
        tagTemporada.innerHTML = element.temporada;
        tagDescripcion.innerHTML = element.descripcion;
        //console.log (element.nombres);        
        tagListado.appendChild(tagCategoria);
        tagListado.appendChild(tagProducto);
        tagListado.appendChild(tagDisponible); 
        tagListado.appendChild(tagTemporada);     
        tagListado.appendChild(tagDescripcion);    
        tagListado.appendChild(tagEnter);
    });
}