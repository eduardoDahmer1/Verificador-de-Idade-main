function verificar () {
 var data = new Date()
 var ano = data.getFullYear()
 var fano = document.getElementById('txtano')
 var res = document.querySelector('div#res')
 if (fano.value.length == 0 || Number(fano.value) > ano){
     window.alert('[ERRO] Verifique os dados e tente novamente!')
 } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex [0].checked) {
        genero = 'Homem'
        if(idade >= 0 && idade <10){
            //bebe
            img.setAttribute('src', 'img/bebeeMM.jpg');
        } else if(idade<= 13 ) {
            //criança
            img.setAttribute('src', 'img/criançaamm.jpg');
        }  else if(idade < 21) {
            //adolescente
            img.setAttribute('src', 'img/adolescenteeMM.jpeg') ;
        } else if(idade < 50) {
            //adulto
            img.setAttribute('src', 'img/adultooMM.jpg')  ;
        }else {
            //idoso
            img.setAttribute('src', 'img/senhoorr.jpg');
        }
    } else if (fsex [1].checked) {
        genero = 'Mulher'
        if(idade >= 0 && idade <10){
            //bebe
            img.setAttribute('src', 'img/bebeeff.jpg');
        } else if(idade< 13 ) {
            //criança
            img.setAttribute('src', 'img/criançaaFF.jpg');
        }else if(idade< 21 ) {
            //adolescente
            img.setAttribute('src', 'img/adolescenteeff.jpg');
        }  else if(idade < 50) {
            //adulto
            img.setAttribute('src', 'img/adultooff.jpg');
        } else {
            //idoso
            img.setAttribute('src', 'img/senhoraaa.jpg');
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
    res.appendChild(img)
 }
}