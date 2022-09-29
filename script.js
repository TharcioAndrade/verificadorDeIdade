function verificar(){
    var data = new Date()
    //getfullyear pega o ano com quatro digitos, da nossa variavel data que é data atual
    var ano = data.getFullYear()
    var fano = document.getElementById('txtAno')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert("[ERRO] verifique os dados e  tente novamente")
    } else{
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        //criando um elemento do tipo imagem com javascript
        var img = document.createElement('img')
        //dando um ID com nome de FOTO para o elemento imagem que criamos com javascript
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'images/bebeM.png')
            } else if(idade >= 12 && idade < 26){
                //adolescente
                img.setAttribute('src', 'images/jovemM.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'images/adultoM.png')
            }else{
                //idoso
                img.setAttribute('src', 'images/idosoM.png')
            }
        }else if(fsex[1].checked){
            genero = 'mulher'
            if(idade >= 0 && idade < 12){
                //Criança
                img.setAttribute('src', 'images/bebeF.png')
            } else if(idade >= 12 && idade < 26){
                //adolescente
                img.setAttribute('src', 'images/jovemF.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'images/adultoF.png')
            }else{
                //idoso
                img.setAttribute('src', 'images/idosoF.png')
            }
        }
        //centralizando o resultado com javascript
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        //apprendChild adiciona um elemento
        res.appendChild(img)
    }

}
