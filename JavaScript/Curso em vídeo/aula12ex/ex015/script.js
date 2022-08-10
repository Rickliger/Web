function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.leght == 0 || Number(fano.value) > ano){
        window.alert('[ERRO]Revise os dados inseridos')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade} anos`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'um homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/bebehomem.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovemhomem.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/adultohomem.png')
            }else{
                //idoso
                img.setAttribute('src', 'imagens/idosohomem.png')
            }
        }else if (fsex[1].checked){
            genero = 'uma mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/bebemulher.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovemmulher.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/adultomulher.png')
            }else{
                //idoso
                img.setAttribute('src', 'imagens/idosomulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<strong> Detectamos ${genero} com ${idade} anos de idade. </strong>`
        res.appendChild(img)
    }
}