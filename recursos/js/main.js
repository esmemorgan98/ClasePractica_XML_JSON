let xhr = new XMLHttpRequest();

xhr.onload = function (){
    if (this.readyState === 4 && this.status === 200) {
        mostrarCategorias (this);
        }
    };

xhr.open('GET', 'http://127.0.0.1:5500/datos.xml', true);
xhr.send();

function mostrarCategorias (xml){
    let categorias = xml.responseXML;
    let listado = categorias.getElementsByTagName('producto');
    let article = document.getElementById('datosXML');
    article.innerHTML = '';

    for (let i=0; i<listado.length; i++ ){
        let tagCodigo = document.createElement('h3');

        tagCodigo.innerHTML = listado[i].getElementsByTagName('codigo')[0].textContent;       

        article.appendChild(tagCodigo);

        let listaCateg = listado[i].getElementsByTagName('categoria');
        
        for (let c=0; c< listaCateg.length; c++){
            console.log (listaCateg[c]);
            let tagNombreC = document.createElement('h2');
           
            let tagDescripcionC  = document.createElement('p');
            let tagEnter = document.createElement('br');
            
            tagNombreC.innerHTML = listaCateg[c].getElementsByTagName('nombre')[0].textContent;
            tagDescripcionC.innerHTML = listaCateg[c].getElementsByTagName('descripcion')[0].textContent;

            article.appendChild(tagNombreC);
            article.appendChild(tagDescripcionC); 
            article.appendChild(tagEnter);
        }        
    }
}





