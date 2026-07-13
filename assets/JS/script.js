// Pega os dados da escolha do tipo de conversão
const tipoConversao = document.getElementById("tipo")

// Pega os dados da escolha fromCurrency e toCurrency
const fromCurrency = document.getElementById("fromCurrency")
const toCurrency = document.getElementById("toCurrency")

// Pega o valor inserido
var entered_value = document.getElementById("enteredValue")

// Declarando os valores
const select_tipoConversao = tipoConversao.value
const select_fromCurrency = fromCurrency.value
const select_toCurrency = toCurrency.value

// Função para conversão de moedas
async function convert() {

    // Importa os dados de conversao em tempo real
    const resposta = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL");
    const dados = await resposta.json();

    // Verifica quais os selects e define qual sera a cotação
    if (fromCurrency.value === "usd" && toCurrency.value === "brl"){
        var calculo = entered_value.value * dados.USDBRL.bid;
        
        // Input mostrando os resultados
        document.getElementById("resultado").value = calculo.toFixed(2);
    }
}
