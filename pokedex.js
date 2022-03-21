const fetchPokemon = () => {

    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./assets/img/pikachutriste.webp"); 
            pokeN("Pokémon no encontrado :( ");
            pokeid("?");
            poketipo("?");

            esta = document.getElementById("estadisticas");
            esta.textContent = "No Disponible" ;

            mov = document.getElementById("movimientos");
            mov.textContent = "No Disponible" ;
           
            
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            
            let pokname = data.forms[0].name;
            pokeN(pokname);

            let pokid = data.id;
            pokeid(pokid);

            let potipo = data.types[0].type.name;
            poketipo(potipo);

            let pokeestadisticas=[];

            for(var i=0;i<data.stats.length;i++){
                pokeestadisticas.push(data.stats[i].stat.name+"  "+data.stats[i].effort);
            }

            pokestadisticas(pokeestadisticas);
           

            let pokemovimientos=[];

            for(var i=0;i<10;i++){
                if(data.moves[i]!=null){
                    pokemovimientos.push(data.moves[i].move.name);
                }
            }
            
            pokemov(pokemovimientos);
           
        }
        
    });
}


function pokeN(String){
    const pname = document.getElementById("nombre");
    pname.textContent = String ;
}


const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

function pokeid(String){
    const pid = document.getElementById("identificador");
    pid.textContent = "N°" + String ;
}

function poketipo(String){
    const ptipo = document.getElementById("tipo");
    ptipo.textContent = "Tipo: " + String ;
}

function pokestadisticas(String){
    
    function agregarElementos(){ 
        estadisticas.textContent = "" ;
        var lista=document.getElementById("estadisticas"); 
        String.forEach(function(data){
        var linew= document.createElement("div");    
        var contenido = document.createTextNode(data);
        lista.appendChild(linew);
        linew.appendChild(contenido);
        
        })
        }
        agregarElementos(); 
}

function pokemov(String){
    
    function agregarElementos(){ 
        movimientos.textContent = "" ;
        var lista=document.getElementById("movimientos"); 
        String.forEach(function(data){
        var linew= document.createElement("div");    
        var contenido = document.createTextNode(data);
        lista.appendChild(linew);
        linew.appendChild(contenido);
       
        })
        }

        agregarElementos(); 
}
