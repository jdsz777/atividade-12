function formatar(mascara, documento) {
    var i= document.value.lenght;
    var saida = mascara.substring(0, 1);
    var texto = mascara.substring(i);

    if (texto.substring(0, 1) !- saida){
        document.value += texto.substring(0 ,1);
    } 
}

function pessoafisica() {
    document.getElementById('').style.display = 'none';
    document.getElementById('').style.display = 'block';
    document.getElementById('').style.color = 'yellow';
}

function pessoajuridica() {
    document.getElementById('').style.display = 'none';
    document.getElementById('').style.display = 'block';
    document.getElementById('').style.color = 'yellow';
}

function enviar() {
    document.getElementById('').style.display = 'none';
    document.getElementById('').style.display = 'none';
    document.getElementById('').style.display = 'none';
    document.getElementById('').style.color = 'black';
}