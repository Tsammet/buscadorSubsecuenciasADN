const subcad = (cadena,subsecuencia) => {

    const posicion = cadena.indexOf(subsecuencia)
    
    if(posicion >= 0){
        document.getElementById("mensaje").innerHTML = "La Cadena es: " + cadena + "<br> Y la secuencia que deseas buscar es: " + subsecuencia + "<br> que se encuentra en la posición : " + posicion
    }else{
        document.getElementById("mensaje").innerHTML = "No se encontro la subsecuencia dentro de la cadena"
    }
    
}

const datos = () =>{
    let cadena = document.getElementById('cadena').value;
    let subsecuencia = document.getElementById('subsecuencia').value
    const imprimirsubcadena = subcad(cadena, subsecuencia)
}
