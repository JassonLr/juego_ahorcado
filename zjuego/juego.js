let palabrita;
let cant_errores = 0; //cuantas veces me equivoqué
let cant_aciertos = 0; //cuantas letras acerté

const palabras = ['manzanas', 'Camiseta', 'caramelos', 'casa', 'streamer', 'twitch',
                    'iphone', 'microfono'];

const btn = id('jugar');   
//const btn = document.getElementById('jugar')   
const imagen = id('imagen');
const btn_letras = document.querySelectorAll("#letras button");  
//const btn_letras = document.querySelectorAll("#letras button");  

/* click en iniciar juego */
btn.addEventListener('click', iniciar);


/*esta funcion indica la cantidad de palabras saca un valor al azar agrega y crea 
spans e inca cambiar el imagen del ahorcado... */
function iniciar(event) {
    imagen.src = 'img/img0.png';                             
    btn.disabled = true;
    cant_errores = 0;
    cant_aciertos = 0;

    const parrafo = id('palabra_a_adivinar');                 
    parrafo.innerHTML = '';                      

    const cant_palabras = palabras.length;   // indicame la cantidad de palabras    
    const valor_al_azar = obtener_random(0, cant_palabras); //valor al azar pero el indice

    /*aqui palabrita toma elcontenido de array en funcion al indice que saco el random */
    palabrita = palabras[valor_al_azar];
    console.log(palabrita);
    const cant_letras = palabrita.length; 

    /*por cada caracter que tenga la palabrita adivinar va crear una etiqueta de tipo span y 
    lo va agregar dentro de parrafo que tenga el id="palabra adivinar"*/
    for (let i = 0; i < btn_letras.length; i++) {  
        btn_letras[i].disabled = false;
    }

    for (let i = 0; i < cant_letras; i++) {   

        const span = document.createElement('span'); 
        parrafo.appendChild(span);
    }

}


/* click de adivinar letra */
for (let i = 0; i < btn_letras.length; i++) {
    btn_letras[i].addEventListener('click', click_letras);
}



/**busca en el id="palabras adivinar" sus etiquetas spans y devuelve un array */
function click_letras(event) {  
    const spans = document.querySelectorAll('#palabra_a_adivinar span');  
    const button = event.target; 
    button.disabled = true; //para que el boton este inactivo cuando se inicia el juego

    const letra = button.innerHTML.toLowerCase();
    const palabra = palabrita.toLowerCase();

    let acerto = false;
    
    /**recorre letra por letra */
    for (let i = 0; i < palabra.length; i++) { 
        if (letra == palabra[i]) {              
            /*la variable i es la posición de la letra en la palabra.
            que coincide con el span al que tenemos que mostarle esta letra...*/
            spans[i].innerHTML = letra;   
            cant_aciertos++;    
            acerto = true; 
        }
    }

    /*si termino el for y acerto sigue estando en falso cambia la imagen por otra*/
    if (acerto == false) { 
        cant_errores++;
        const source = `img/img${cant_errores}.png`; 
        imagen.src = source;
    }
  
     //si la cantidad de errores  sea el limite agrega en el id="resultado" finaliza inhabilita los botones
    
    if (cant_errores == 7) {                                  
        id('resultado').innerHTML = "Perdiste, la palabra era " + palabrita;
        game_over();  

       // todo lo contrario al anterior
    } else if (cant_aciertos == palabrita.length) {  
        id('resultado').innerHTML = "GANASTE!! ";
        game_over();
    }
    console.log("la letra " + letra + " en la palabra " + palabra + " ¿existe?: " + acerto);
}

/* fin del juego aqui lo desabilita las y habilita el boton obtener palabra */
function game_over() {
    for (let i = 0; i < btn_letras.length; i++) {
        btn_letras[i].disabled = true;
    }

    btn.disabled = false; //par que el buton se vueva activar lo contarcio del inicio
}


game_over();