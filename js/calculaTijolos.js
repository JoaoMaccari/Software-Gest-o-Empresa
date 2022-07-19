var vendas = document.querySelectorAll('.venda');
let soma6 =0
let soma8 = 0
let soma9 = 0
let somaTavela = 0

let tipo 
let socio;

        
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

   
       
        let total6f = calculaTotal6f(quantidade)
        let total8f = calculaTotal8f(quantidade)
        let total9f = calculaTotal9f(quantidade)
        let totalT = calculaTavela(quantidade)

        
    }
   
}



    // função que faz a soma dos produtos
    function calculaTotal6f(qt) {
        soma6 += qt
        
        
        return soma6
    }

    
    function calculaTotal8f(qt) {
        soma8 += qt
        
     
        return soma8
    }

    
    function calculaTotal9f(qt) {
        soma9 += qt
        
        
        return soma9
    }

    
    function calculaTavela(qt) {
        somaTavela += qt
        
       
        return somaTavela
    }


    

    // funções de validação
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
        if (tipo == "6 Furos" || tipo == "8 furos" || tipo == "9 uros" || tipo == "Tavela") {
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
        if (socio = "Sócio01" || "Sócio 02") {
            return true
        }else{
            return false
        }
    }
    
        