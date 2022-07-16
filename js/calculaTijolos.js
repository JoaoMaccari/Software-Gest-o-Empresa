var vendas = document.querySelectorAll('.venda');
var total = document.querySelector('#total');
let tipo 
let socio;

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

 
    
    let quantidadeEhValido = validaQuantidade(quantidade);
    let nomeEhValido = validaNome(nome);
    let tipoEhValido = validaTipo(tipo);
    let totalEhValido = validaTot(total);
    let socioEhValido = validaSocio(socio);

    if (quantidade <= 0 ) {
        quantidadeEhValido = false
        tdQt.textContent = "Insira um valor correto"
        venda.classList.add("campo-invalido")
    }

    if (nome == "") {
        nomeEhValido = false
        venda.classList.add("campo-invalido")
        tdNome.textContent = "Insira um nome"
        
    }

    if (tipo == "") {
        tipoEhValido = false;
        venda.classList.add("campo-invalido")
        tdTipo.textContent = "Insira um tipo"

    }

    if (total == "") {
        totalEhValido = false;
        venda.classList.add("campo-invalido")
        tdTotal.innerHTML = "Insira o total"
    }

    if (socio == "") {
        socioEhValido = false;
        venda.classList.add("campo-invalido")
        tdSocio.textContent = "Insira um nome"
    }
    
    if (quantidadeEhValido && nomeEhValido && tipoEhValido && totalEhValido && socioEhValido) {
        somaTot6f = calculaTotProduto(tipo, quantidade)
        somaTot8f = calculaTotProduto(tipo, quantidade)
        somaTot9f = calculaTotProduto(tipo, quantidade)
        somaTavela = calculaTotProduto(tipo, quantidade)

        
    }


    function calculaTotProduto(tipo, quantidade) {

        if(tipo == '6f') {
                    let soma
                    soma += quantidade
                    return soma

                } else if (tipo == "9f") {

                    soma+= quantidade
                    return soma

                }else if (tipo =="8f"){

                    somaf =+ quantidade
                    return soma

                }else if (tipo == "tavela") {

                    soma =+ quantidade
                    return soma
                }

                
    }


    function validaNome(nome) {
        if (nome != ""){
            return true;
        }else{
            return false;
        }
    }

    function validaQuantidade(quantidade) {
        if (quantidade >=0 && quantidade <= 30.000){
            return true
        }else {
            return false
        }
    }

    function validaTipo(tipo) {
        if (tipo == "Tijolos 6 furos" || tipo == "Tijolos 8 furos" || tipo == "Tijolos 9 furos" || tipo == "Tavela") {
            return true
        }else {
            return false
        }
    }

    function validaTot(total) {
        if (total >= 0 && total <=30.000) {
            return true
        }else{
            return false
        }
    }

    function validaSocio(socio) {
        if (socio = "Sócio 01 " || "Sócio 02") {
            return true
        }else{
            return false
        }
    }
    
        console.log(somaTot6f);
       
}



 function validaNome(nome) {
        if (nome != ""){
            return true;
        }else{
            return false;
        }
    }