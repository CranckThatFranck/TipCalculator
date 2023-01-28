// Alterar os números quebrados para número com casas decimais fixa em 2
function formatMoney(value) {
    // Math.ceil arredonda para cima os centavos quebrados
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return value + ' R$'
}

function formatSplit(value) {
    if (value == 1) return value + ' pessoa'
    return value + ' pessoas'
}

// Conexão com o HTML: update()
function update() {
    // variáveis com entrada no HTML, fixar Number para os nºs não entrarem como string
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value
    let split = Number(document.getElementById('splitInput').value)

    // Variáveis que realizam o cálculo das entradas, para devolver ao HTML
    let tipValue =  bill * (tipPercent / 100)
    let billTotal = bill + tipValue
    let billEach = billTotal / split
    
    // Devolução de valores ao HTML
    document.getElementById('tipPercent').innerHTML = tipPercent + '%'
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue)
    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal)
    document.getElementById('splitValue').innerHTML = formatSplit(split)
    document.getElementById('billEach').innerHTML = formatMoney(billEach)
  
}