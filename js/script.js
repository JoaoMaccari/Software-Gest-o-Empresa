var vendas = document.querySelectorAll('.venda')
let somaTot6f = 0
let somaTot9f = 0

for (let i =0; i<vendas.length; i++) {
    
    var venda = vendas[i]

    let tdQt = venda.querySelector('.info-qtd');
    let quantidade = Number(tdQt.textContent)

    let tdTipo = venda.querySelector('.info-tipo')
    let tipo = tdTipo.textContent

    let tdTotal = venda.querySelector('.info-total')
    let total = tdTotal.textContent

    let tdSocio = venda.querySelector('.info-socio')
    let socio = tdSocio.textContent

    console.log(tipo);
    

    if (tipo == '6 Furos') {
        somaTot6f += quantidade
    }

    if (tipo == '9 Furos'){
        somaTot9f += quantidade
    }
}
console.log(somaTot6f)
console.log(somaTot9f)



