var vendas = document.querySelectorAll('.venda');
let somaTot6f = 0;
let somaTot9f = 0;
let somaTot8f = 0;
let somaTavela = 0;
let somaTot = 0;


for (let i = 0; i<vendas.length; i++) {
    
    let venda = vendas[i]

    //tag de celula da tabela
    let tdNome = venda.querySelector(".info-cliente");
    let tdQt = venda.querySelector('.info-qtd');
    let tdTipo = venda.querySelector('.info-tipo')
    let tdSocio = venda.querySelector('.info-socio')
    let tdTotal = venda.querySelector('.info-total')
    
    

    //tag valor da celula
    let nome = tdNome.textContent
    let quantidade = Number(tdQt.textContent)
    let tipo = tdTipo.textContent
    let total = tdTotal.textContent
    let socio = tdSocio.textContent

    console.log(tipo);
    
    let campoEhValido = true 

    if (quantidade <= 0 ) {
        campoEhValido = false
        tdQt.textContent = "Insira um valor correto"
        venda.classList.add("campo-invalido")
    }

    if (nome == "") {
        venda.classList.add("campo-invalido")
        tdNome.textContent = "Insira um nome"
        
    }

    if (tipo == "") {
        venda.classList.add("campo-invalido")
        tdTipo.textContent = "Insira um tipo"

    }

    if (total == "") {
        venda.classList.add("campo-invalido")
        tdTotal.innerHTML = "Insira o total"
    }

    if (socio == "") {
        venda.classList.add("campo-invalido")
        tdSocio.textContent = "Insira um nome"
    }
    

    if(tipo == '6 furos') {
            somaTot6f += quantidade

        } else if (tipo == "9 furos") {

            somaTot9f += quantidade

        }else if (tipo =="8 furos"){

            somaTot8f =+ quantidade

        }else if (tipo == "tavela") {

            somaTavela =+ quantidade
        }
        
        console.log(somaTot6f);
}



