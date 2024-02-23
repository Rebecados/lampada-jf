const turOn = document.getElementById('ligar')
const turOff = document.getElementById('desligar')
const lamp = document.getElementById('lamp')

//criar comando 

function ligar (){
    lamp.src='download (1).jpeg'
}

turOn.addEventListener('click', ligar)