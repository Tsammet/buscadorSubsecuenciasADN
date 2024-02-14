const datos = () =>{
    let cadena = document.getElementById('cadena').value;
    let subsecuencia = document.getElementById('subsecuencia').value
    const imprimirsubcadena = subcad(cadena, subsecuencia)
}

const subcad = (cadena,subsecuencia) => {


    document.getElementById("mensaje").innerHTML = "La Cadena es: " + cadena + " La subsecuencia es: " + subsecuencia

}

