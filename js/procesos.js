// CREAR EL JSON CON LAS CANCIONES
const json = '{"pistas":[{"archivo":"a","titulo":"Un pequeño dedo","interprete":"Super Simple","orden":"1"},{"archivo":"b","titulo":"¿Por qué lloras?","interprete":"Nene León","orden":"2"},{"archivo":"c","titulo":"Los medios de transporte","interprete":"Nene León","orden":"3"},{"archivo":"d","titulo":"Como los animalitos","interprete":"Plim Plim","orden":"4"},{"archivo":"e","titulo":"Soy una taza","interprete":"Plim Plim","orden":"5"},{"archivo":"f","titulo":"Abejita chiquitita","interprete":"Plim Plim","orden":"6"},{"archivo":"g","titulo":"Peekaboo","interprete":"Super Simple","orden":"7"},{"archivo":"h","titulo":"Los animales en la granja","interprete":"Super Simple","orden":"8"},{"archivo":"i","titulo":"Canción del ombligo","interprete":"CoComelon","orden":"9"},{"archivo":"j","titulo":"¿Cómo hace el caballito? - fragmento de Como los animalitos","interprete":"Plim Plim","orden":"10"},{"archivo":"k","titulo":"¿Cómo hace el perrito? - fragmento de Como los animalitos","interprete":"Plim Plim","orden":"11"},{"archivo":"l","titulo":"¿Cómo hace la tortuga? - fragmento de Como los animalitos","interprete":"Plim Plim","orden":"12"},{"archivo":"m","titulo":"¿Cómo hace el gatito? - fragmento de Como los animalitos","interprete":"Plim Plim","orden":"13"},{"archivo":"n","titulo":"Canción de la hora del baño","interprete":"Nene León","orden":"14"},{"archivo":"o","titulo":"Cabeza, hombros, rodillas y pies","interprete":"Super Simple","orden":"15"},{"archivo":"p","titulo":"Toodly Doodly Doo","interprete":"Super Simple","orden":"16"},{"archivo":"q","titulo":"¿Estrellita dónde estás?","interprete":"Super Simple","orden":"17"},{"archivo":"r","titulo":"El baile de la ensalada","interprete":"Plim Plim","orden":"18"}]}';
const obj = JSON.parse(json);

// CREAR VARIABLES BÁSICA: PISTAS QUE VIENEN EN EL JSON, TOTAL DE PISTAS, TABLERO DONDE APARECERÁN LOS BOTONES
let pistas = obj.pistas;
let totalPistas = pistas.length
let elementoTablero = document.getElementById('tablero');
let titulo = document.getElementById('titulo');
let interprete = document.getElementById('interprete');

// AGREGAR LA CLASE reproduciendo AL BOTÓN DE LA PISTA EN CURSO
document.addEventListener('click', function handleClick(event) {
    event.target.classList.add('reproduciendo');
});

// FUNCIÓN PARA EL BOTÓN DETENER LA REPRODUCCIÓN
function stop(){
    document.querySelectorAll('audio').forEach(el => el.pause());
    let allDivs = document.querySelectorAll("article");
    allDivs.forEach(function(el){
        el.classList.remove("reproduciendo");
    });
    titulo.textContent = "";
    interprete.textContent = "";
}

// ITERACIÓN PARA CREAR LOS BOTONES DE CADA PISTA EN EL JSON
document.getElementById('musica').setAttribute('style','background-image:url(img/icn-musica-on.svg)');

for (let i = 0; i < totalPistas; i++){
    // CREAR EL CONTENEDOR article Y AGREGARLE LA IMAGEN DE FONDO Y LA FUNCIÓN onclick()
    let elementoTrack = document.createElement('article');
    elementoTrack.setAttribute('style', 'background-image:url(img/' + pistas[i].archivo + '-on.png)');
    elementoTrack.setAttribute('onclick','play(' + '"' + pistas[i].archivo + '"' + ',' + i + ')');
    elementoTablero.appendChild(elementoTrack);

    // CREAR EL audio DE LA PISTA ITERADA CON UN ID
    let elementoAudio = document.createElement('audio');
    elementoAudio.setAttribute('preload', 'auto');
    elementoAudio.setAttribute('id', pistas[i].archivo);
    elementoAudio.setAttribute('src', 'audio/' + pistas[i].archivo + '.mp3');
    elementoTrack.appendChild(elementoAudio);

    // CREAR UN LISTENER EN CADA BOTÓN PARA SABER CUÁNDO DEJA DE REPRODUCIR EL SONIDO Y REMOVER LA CLASE reproduciendo
    document.getElementById(pistas[i].archivo).addEventListener("ended",function(){
        let allDivs = document.querySelectorAll("article");
        allDivs.forEach(function(el){
            el.classList.remove("reproduciendo");
        });
        titulo.textContent = "";
        interprete.textContent = "";
    });
}

// FUNCIÓN PARA QUE CADA BOTÓN REPRODUZCA SU SONIDO
function play(x,y){
    let audio = document.getElementById(x);
    
    // MOSTRAR LA CANCIÓN E INTÉRPRETE
    titulo.textContent = pistas[y].titulo + ' | ';
    interprete.textContent = pistas[y].interprete;

    // QUITAR DE TODOS LOS ELEMENTOS LA CLASE reproduciendo EN CASO DE QUE EXISTA ALGUNA REPRODUCCIÓN EN CURSO
    let allDivs = document.querySelectorAll("article");
    allDivs.forEach(function(el){
        el.classList.remove("reproduciendo");
    });

    // PAUSAR TODOS LOS AUDIOS EN CASO DE QUE EXISTA ALGUNA REPRODUCCIÓN EN CURSO
    document.querySelectorAll('audio').forEach(el => el.pause());

    // REINICIAR Y REPRODUCIR EL AUDIO
    audio.currentTime = 0;
    audio.play();
}
