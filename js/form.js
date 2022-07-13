let tipo ;
let socio;

let btnAdd = document.querySelector('#adicionar-venda')
btnAdd.addEventListener("click", function(event) {
    event.preventDefault()


    //pega inputs do formulario
    var form = document.querySelector('#form-adiciona')
    
    let venda = obtemVendaFormulario(form)
    
    let vendaTr = montaTr(venda)

    // let erros = validaVenda(venda)
    // var msgErro = document.querySelector("#msg-erro")

    // if (erros.length > 0) {
    //     for(let i = 0; i<erros.lenght; i++) {
    //         msgErro.textContent += erros[i] + ", ";
    //     }

    //     return ;
    // }

    // msgErro.textContent = " algum campo invalido"
    

   
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

function obtemVendaFormulario(form) {

    let venda = {
        cliente: form.cliente.value,
        quantidade: form.quantidade.value,
        tipo: form.tipo.value,
        total: form.total.value,
        socio: form.socio.value
        //campo caso for colocar o total na tabela
    }
    console.log(venda);
    return venda;
    
  
}

function montaTr(venda) {
    let vendaTr = document.createElement("tr");
    vendaTr.classList.add("venda")

   
    let clienteTd = montaTd(venda.cliente, "info-cliente")

    let quantidadeTd =montaTd(venda.quantidade, "info-qtd")
    let tipoTd = montaTd(venda.tipo, "info-tipo");
    let totalTd = montaTd(venda.total, "info-total"); 
    let socioTd = montaTd(venda.socio, "info-socio");

    vendaTr.appendChild(clienteTd);
    vendaTr.appendChild(quantidadeTd);
    vendaTr.appendChild(tipoTd);
    vendaTr.appendChild(totalTd);
    vendaTr.appendChild(socioTd);

    return vendaTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td")
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaVenda(venda) {
    var erros =[];

    if (!validaNome(venda.cliente)) {
        erros.push("nome é ivalido")
    }
    
    if (!validaQuantidade(venda.quantidade)) {
        erros.push("quantidade invalida")
    }

    if (!validaTipo(venda.tipo)) {
        erros.push("tjipo invalido")
    }

    if (!validaTot(venda.total)) {
        erros.push("total invalido")
    }

    if(!validaSocio(venda.socio)) {
        erros.push("socio invalido")
    }

    return erros
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
    if (socio == "Sócio 01 " || socio == "Sócio 02") {
        return true
    }else{
        return false
    }
}
