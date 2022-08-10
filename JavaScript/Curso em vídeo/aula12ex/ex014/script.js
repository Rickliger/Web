function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 6 && hora < 12){
        //bom dia
        img.src = 'imagens/manha.png'
        document.body.style.background = '#fff0f9'
    }else if (hora >= 12 && hora <= 18){
        //boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#cc776a'
    }else{
        //boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#132a3c'
    }
    
}
