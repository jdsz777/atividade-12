function formatar(mascara, documento) {
    var i = documento.value.length;
    var saida = mascara.substring(0, 1);
    var texto = mascara.substring(i)

    if (texto.substring(0, 1) != saida) {
        documento.value += texto.substring(0, 1);
    }

}
function pessoajuridica() {
    document.getElementById('tabela').style.display = 'none';
    document.getElementById('tabela2').style.display = 'block';
}
function pessoafisica() {
    document.getElementById('tabela2').style.display = 'none';
    document.getElementById('tabela').style.display = 'block';
}
function enviar() {
    document.getElementById('tabela2').style.display = 'none';
    document.getElementById('tabela').style.display = 'none';
    document.getElementById('enviar').style.display = 'none';
}