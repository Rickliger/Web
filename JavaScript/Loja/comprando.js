const items = [
    {
        id: 0,
        nome: 'Camisetas Basic',
        img: 'imagens/camiseta.png',
        quantidade: 0
    },
    {
        id: 1,
        nome: 'Bermuda Slim Rosa',
        img: 'imagens/bermuda.png',
        quantidade: 0
    },
    {
        id: 2,
        nome: 'Nike Air Force 32.4',
        img: 'imagens/sapato.png',
        quantidade: 0
    }
]

iniciarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    items.map((val)=>{
        containerProdutos.innerHTML += `

        <div class="produto-single">
            <img src="`+val.img+`" />
            <p>`+val.nome+`</p>
            <a key="`+val.id+`" href="#" ">Comprar<a/>
        </div>

        `;
    })
}

iniciarLoja();

atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML = ''
    items.map((val)=>{
        if(val.quantidade > 0){
            containerCarrinho.innerHTML += `
        <p>`+val.nome+`| quantidade: `+val.quantidade+`</p>
        <hr>
        `;
        }
        
    })
}

var links = document.getElementsByTagName('a');

for (var i = 0; i < links.length; i++){
    links[i].addEventListener("click", function(){
        let key = this.getAttribute('key');
        items[key].quantidade++;
        atualizarCarrinho();
        return false;
    })
}

flutuar()