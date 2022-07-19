function init(){
    var op = prompt('Ingrese el valor de la temperatura en grados Celcius:', '');

    //Elemento div donde se mostrará el menu de las operaciones 
    var operaciones = document.getElementById('resultado');

    resultado.innerHTML = "<p class=\"conversion\">" + "La conversión de °C es: " + ((parseFloat(op) * 1.8) + 32 ) + " °F" + "</p>\n";
}

window.onload = init;