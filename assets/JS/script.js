// Pega os dados da escolha do tipo de conversão
const tipoConversao = document.getElementById("tipo")

// Pega os dados da escolha fromCurrency e toCurrency
const fromCurrency = document.getElementById("fromCurrency")
const toCurrency = document.getElementById("toCurrency")

// Pega o valor inserido
var entered_value = document.getElementById("enteredValue")

// Input mostrando os resultados
var result = document.getElementById("resultado")

// Declarando os valores
const select_tipoConversao = tipoConversao.value
const select_fromCurrency = fromCurrency.value
const select_toCurrency = toCurrency.value

function convert() {
    if (fromCurrency.value === "usd" && toCurrency.value === "usd"){
        calculo = entered_value.value * entered_value.value
        
        console.log(result.innerHTML = `<input type='text' id='resultado'>${calculo}</input>`)
    }
}

