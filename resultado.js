function resultado() {
    document.getElementById('media').innerHTML=media;
    if (media >= 6) {
        document.getElementById('situacao').innerHTML="Aprovado!";
        document.getElementById('situacao').style.color='blue';
    } else {
        document.getElementById('situacao').innerHTML="Reprovado!";
        document.getElementById('situacao').style.color='red';
    }
}