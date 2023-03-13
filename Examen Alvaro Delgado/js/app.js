//Alvaro Delgado Hernandez


// Inicialización del mapa de Leaflet

var map = L.map('mapa').setView([36.72071131817986, -4.420041081375409], 13);


//Aquí se crea un objeto de mapa de Leaflet y se define su ubicación y nivel de zoom inicial.

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// Aquí se agrega una capa de mapa base de OpenStreetMap 
//al mapa creado anteriormente. La función tileLayer es la que carga y muestra la capa de mapa.

fetch('https://raw.githubusercontent.com/FRomero999/ExamenDIW2022/main/rutas_arqueologicas.json')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        console.log(data[24].properties.nombre);
        const tbody = document.querySelector("#listaElementos");
        const template = document.querySelector('#elementoLista');
   
   
     //Aquí se utiliza la función fetch para obtener el archivo JSON desde la URL especificada y 
     //se lo convierte en un objeto  utilizando el método json(). Luego se muestra el contenido en la consola y 
     //se procesa para mostrar la informacion en una tabla HTML.  
      
     for (let i = 0; i < data.length; i++) {
            
            // Clono la nueva fila e inserto en la tabla
           
            const clone = template.content.cloneNode(true);
           
            let nombre = clone.getElementById('nombre')
            
            let horario = clone.getElementById('horario')
           
            let direccion = clone.getElementById('direccion')
            
            nombre.textContent = data[i].properties.nombre;
            
            horario.textContent = data[i].properties.horario;
            
            direccion.textContent = data[i].properties.direccion;
           
          
           
           
           
            tbody.appendChild(clone);

            
        
            //Ejercicio3
       
        var popup = L.marker([data[i].properties.x, data[i].properties.y]).addTo(map);
        
        popup.bindPopup(`${data[i].properties.nombre}`);
        
    }


    })

    //el ejercicio 4 no lo he hecho por que he perdido demasiado tiempo buscando en internet


