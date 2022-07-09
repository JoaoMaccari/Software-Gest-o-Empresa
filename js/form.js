let tipo ;
let socio;

let btnAdd = document.querySelector('#adicionar-venda')
btnAdd.addEventListener("click", function(event) {
    event.preventDefault()



    var form = document.querySelector('#form-adiciona')

    let cliente = form.cliente.value;
    let quantidade = form.quantidade.value;
    let tipoProd = tipo
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

function getSocio(){
    let inputSelectSocio = document.getElementById('socio');
    let op = inputSelectSocio.options[inputSelectSocio.selectedIndex].text

    let opValor = document.getElementsByClassName('info-tipo')
    opValor.value = op

    socio = op
    return socio;
}



function getTipo(){
    let inputSelect = document.getElementById('tipo');
    let op = inputSelect.options[inputSelect.selectedIndex].text

    let opValor = document.getElementsByClassName('info-tipo')
    opValor.value = op

    
    tipo = op
   
    return tipo;
    
   
}