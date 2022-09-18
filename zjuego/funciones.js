/*esta funcion indica la cantidad de palabras*/
function id(str) {
    return document.getElementById( str );
}
/**esta funcion saca un valor al azar del indice[i] del arreglo para que me crea el span */
function obtener_random( num_min, num_max ){
    const amplitud_valores = num_max - num_min;  
    /*nos permite sacar un valor entero entre dos rangos /* math.floor(elimina el decimal)*/
    const valor_al_azar = Math.floor(Math.random() * amplitud_valores) + num_min; 
    return valor_al_azar;
}