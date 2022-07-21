


let btnAdd = document.querySelector('#adicionar-venda')
btnAdd.addEventListener("click", function(event) {
    event.preventDefault()




                                                                        //pega inputs do formulario
    var form = document.querySelector('#form-adiciona')
    
    let venda = obtemVendaFormulario(form)
    
    let vendaTr = montaTr(venda)


    
    let erros = validaVenda(venda)
    var msgErro = document.querySelector("#msg-erro")

    console.log(erros);
    if (erros.length > 0) {

        for(let i = 0; i<erros.lenght; i++) {

            
            msgErro.textContent += erros[i];

        }
           
        return ;
        
    }


    var tabela = document.querySelector('#tabela-vendas')
    tabela.appendChild(vendaTr);

    

})

function getSocio(){
    let inputSelectSocio = document.getElementById('socio');
    let op = inputSelectSocio.options[inputSelectSocio.selectedIndex].value

  
    return op;
}



function getTipo(){
    let inputSelect = document.getElementById('tipo');
    let op = inputSelect.options[inputSelect.selectedIndex].value


   
    return op;
}

function obtemVendaFormulario(form) {
   
    

    let venda = {
        cliente: form.cliente.value,
        quantidade:form.cliente.value,
        tipo:form.tipo.value,
        total: form.total.value,
        socio: form.socio.value,

        
        
        // total6Furos: calculaTotal6f(venda)
        // total8Furos: Number(calculaTotal8f( form.quantidade.value)),
        // total9Furos: Number(calculaTotal9f( form.quantidade.value)),
        // totalTavela: Number(calculaTavela( form.quantidade.value))

        //somar oq entra no form
        
        
    }

   
    

    return venda;
    
  
}

    


                                                                        // MONTA TABELA
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
        erros.push("tipo invalido")
    }else {

    }

    if (!validaTot(venda.total)) {
        erros.push("total invalido")
    }

    if(!validaSocio(venda.socio)) {
        erros.push("socio invalido")
    }

  

    return erros
}







