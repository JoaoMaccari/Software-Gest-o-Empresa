var vendas = document.querySelectorAll('.venda')
let somaTot6f = 0
let somaTot9f = 0


let tipo;
let socio;

function getTipo(){
    let inputSelect = document.getElementById('tipo');
    let op = inputSelect.options[inputSelect.selectedIndex].text

    let opValor = document.getElementsByClassName('info-tipo')
    opValor.value = op

    tipo = op
    return tipo;
}

function getSocio(){
    let inputSelectSocio = document.getElementById('socio');
    let op = inputSelectSocio.options[inputSelectSocio.selectedIndex].text

    let opValor = document.getElementsByClassName('info-tipo')
    opValor.value = op

    socio = op
    return socio;
}



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

    
    //let campoEhValido = true 

    if (quantidade <= 0 ) {
        //campoEhValido = false
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
    

    if(tipo == '6 Furos') {
            somaTot6f += quantidade
        } else if (tipo == "9 Furos") {
            somaTot9f += quantidade
        }

   
        
}


let btnAdd = document.querySelector('#adicionar-venda')
btnAdd.addEventListener("click", function(event) {
    event.preventDefault()

    var form = document.querySelector('#form-adiciona')

    let cliente = form.cliente.value;
    let quantidade = form.quantidade.value;
    let tipoProd = tipo;
    let total =  form.total.value;
    let socioRecebe = socio

    
    console.log(cliente);
    console.log(quantidade);
    console.log(tipoProd);
    console.log(total);
    console.log(socioRecebe);

    var vendaTr = document.createElement("tr")

    var clienteTd = document.createElement("td")
    var quantidadeTd = document.createElement("td")
    var tipoTd =  document.createElement("td")
    var totalTd = document.createElement("td")
    var socioTd = document.createElement("td")
    
    clienteTd.textContent = cliente
    quantidadeTd.textContent = quantidade
    tipoTd.textContent = tipo
    totalTd.textContent = total
    socioTd.textContent = socio

    vendaTr.appendChild(clienteTd)
    vendaTr.appendChild(quantidadeTd)
    vendaTr.appendChild(tipoTd)
    vendaTr.appendChild(totalTd)
    vendaTr.appendChild(socioTd)
    
    
    var tabela = document.querySelector('#tabela-vendas')
    tabela.appendChild(vendaTr);
})






