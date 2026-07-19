import {} from "./script.js";

// Pega os dados da escolha do tipo de conversão
const tipoConversao = document.getElementById("tipo")

// Pega os dados da escolha fromCurrency e toCurrency
const fromCurrency = document.getElementById("fromCurrency")
const toCurrency = document.getElementById("toCurrency")

// Pega o valor inserido
let entered_value = document.getElementById("enteredValue");
let input_result = document.getElementById("resultado");

//Função de conversao
export async function convert() {
    try {
    const resposta = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL,USD-EUR,USD-CLP,BRL-USD,BRL-EUR,BRL-CLP,EUR-USD,EUR-CLP,EUR-BRL,CLP-USD,CLP-EUR,CLP-BRL");
    const dados = await resposta.json();

    //MOEDAS
    // Dolar para Real BR
    if (fromCurrency.value === "usd" && toCurrency.value === "brl"){
        let calculo = entered_value.value * dados.USDBRL.bid;
        document.getElementById("resultado").value = calculo.toFixed(2);
    }
    // Dolar USD para Euro Eur
    else if (fromCurrency.value === "usd" && toCurrency.value === "eur"){
        let calculo = entered_value.value * dados.USDEUR.bid;
        document.getElementById("resultado").value = calculo.toFixed(2);
    }
     // Dolar USD para Peso chileno CLP
    else if (fromCurrency.value === "usd" && toCurrency.value === "clp"){
        let calculo = entered_value.value * dados.USDCLP.bid;
        document.getElementById("resultado").value = calculo.toFixed(2);
    }
    // Real Br para Dolar USD
    else if (fromCurrency.value === "brl" && toCurrency.value === "usd"){
        let calculo = entered_value.value * dados.BRLUSD.bid;
        document.getElementById("resultado").value = calculo.toFixed(2);
    }
    // Real Br para Euro Eur
    else if (fromCurrency.value === "brl" && toCurrency.value === "eur"){
        let calculo = entered_value.value * dados.BRLEUR.bid;
        document.getElementById("resultado").value = calculo.toFixed(2);
    }
    // Real para Peso chileno CLP
    else if (fromCurrency.value === "brl" && toCurrency.value === "clp"){
        let calculo = entered_value.value * dados.BRLCLP.bid;
        document.getElementById("resultado").value = calculo.toFixed(2);
    }
    // Euro Eur para dolar usd
    else if (fromCurrency.value === "eur" && toCurrency.value === "usd"){
        let calculo = entered_value.value * dados.EURUSD.bid;
        document.getElementById("resultado").value = calculo.toFixed(2);
    }
    // Euro Eur para Peso chileno CLP
    else if (fromCurrency.value === "eur" && toCurrency.value === "clp"){
        let calculo = entered_value.value * dados.EURCLP.bid;
        document.getElementById("resultado").value = calculo.toFixed(2);
    }
    // Euro Eur para Real Brasileiro
    else if (fromCurrency.value === "eur" && toCurrency.value === "brl"){
        let calculo = entered_value.value * dados.EURBRL.bid;
        document.getElementById("resultado").value = calculo.toFixed(2);
    }
    // Peso chileno para Real BR
    else if (fromCurrency.value === "clp" && toCurrency.value === "brl"){
        let calculo = entered_value.value * dados.CLPBRL.bid;
        document.getElementById("resultado").value = calculo.toFixed(2);
    }
    // Peso chileno para Euro eur
    else if (fromCurrency.value === "clp" && toCurrency.value === "eur"){
        let calculo = entered_value.value * dados.CLPEUR.bid;
        document.getElementById("resultado").value = calculo.toFixed(2);
    }
    // Peso chileno para dolar usd
    else if (fromCurrency.value === "clp" && toCurrency.value === "usd"){
        let calculo = entered_value.value * dados.CLPUSD.bid;
        document.getElementById("resultado").value = calculo.toFixed(2);
    }
    

    // MEDIDAS

    // Converte CM para Metros
    if (fromCurrency.value == "cm" && toCurrency.value == "mt") {
        let calculo_entrada = entered_value.value / 100;
        document.getElementById("resultado").value = calculo_entrada;
    }
    // Converte CM para MM
    if (fromCurrency.value == "cm" && toCurrency.value == "mm") {
        let calculo = entered_value.value * 10;
        document.getElementById("resultado").value = calculo;
    }
    // Converte CM para Polegadas
    if (fromCurrency.value == "cm" && toCurrency.value == "pol") {
        let calculo = entered_value.value / 2.54;
        document.getElementById("resultado").value = calculo.toFixed(2);
    }
    // Converte Metros para CM
     if (fromCurrency.value == "mt" && toCurrency.value == "cm") {
        let calculo = entered_value.value * 100;
        document.getElementById("resultado").value = calculo;
    }
    // Converter Metros para MM
     if (fromCurrency.value == "mt" && toCurrency.value == "mm") {
        let calculo = entered_value.value * 1000;
        document.getElementById("resultado").value = calculo;
    }
    // Converter Metros para polegadas
     if (fromCurrency.value == "mt" && toCurrency.value == "pol") {
        let calculo = entered_value.value * 39.37;
        document.getElementById("resultado").value = calculo.toFixed(2);
    }
    //Converter MM para CM
    if (fromCurrency.value == "mm" && toCurrency.value == "cm") {
        let calculo = entered_value.value / 10;
        document.getElementById("resultado").value = calculo;
    }
    //Converter MM para Metros
    if (fromCurrency.value == "mm" && toCurrency.value == "mt") {
        let calculo = entered_value.value / 1000;
        document.getElementById("resultado").value = calculo;
    }
    //Converter MM para polegadas
    if (fromCurrency.value == "mm" && toCurrency.value == "pol") {
        let calculo = entered_value.value / 25.4;
        document.getElementById("resultado").value = calculo.toFixed(2);
    }
    //Converter Polegadas para CM
    if (fromCurrency.value == "pol" && toCurrency.value == "cm") {
        let calculo = entered_value.value * 2.54;
        document.getElementById("resultado").value = calculo.toFixed(2);
    }
    //Converter Polegadas para Metros
    if (fromCurrency.value == "pol" && toCurrency.value == "mt") {
        let calculo = entered_value.value / 39.37;
        document.getElementById("resultado").value = calculo.toFixed(2);
    }
    //Converter Polegadas para MM
    if (fromCurrency.value == "pol" && toCurrency.value == "mm") {
        let calculo = entered_value.value * 25.4;
        document.getElementById("resultado").value = calculo.toFixed(2);
    }

    // MASSAS

    //Converte KG para Grama
    if (fromCurrency.value == "kg" && toCurrency.value == "g") {
        let calculo = entered_value.value * 1000;
        document.getElementById("resultado").value = calculo;
    }
    // Converte KG para MG
    if (fromCurrency.value == "kg" && toCurrency.value == "mg") {
        let calculo = entered_value.value * 1e+6;
        document.getElementById("resultado").value = calculo;
    }
    // Converte KG para Libra
    if (fromCurrency.value == "kg" && toCurrency.value == "lb") {
        let calculo = entered_value.value * 2.205;
        document.getElementById("resultado").value = calculo.toFixed(2);
    }
    // Converte Grama para KG
     if (fromCurrency.value == "g" && toCurrency.value == "kg") {
        let calculo = entered_value.value / 1000;
        document.getElementById("resultado").value = calculo;
    }
    // Converter Grama para MG
     if (fromCurrency.value == "g" && toCurrency.value == "mg") {
        let calculo = entered_value.value * 1000;
        document.getElementById("resultado").value = calculo;
    }
    // Converter Grama para Libra
     if (fromCurrency.value == "g" && toCurrency.value == "lb") {
        let calculo = entered_value.value / 453.6;
        document.getElementById("resultado").value = calculo.toFixed(2);
    }
    //Converter MG para KG
    if (fromCurrency.value == "mg" && toCurrency.value == "kg") {
        let calculo = entered_value.value / 1e+6;
        document.getElementById("resultado").value = calculo;
    }
    //Converter MG para G
    if (fromCurrency.value == "mg" && toCurrency.value == "g") {
        let calculo = entered_value.value / 1000;
        document.getElementById("resultado").value = calculo;
    }
    //Converter MG para Libra
    if (fromCurrency.value == "mg" && toCurrency.value == "lb") {
        let calculo = entered_value.value / 453600;
        document.getElementById("resultado").value = calculo.toFixed(2);
    }
    //Converter Libra para KG
    if (fromCurrency.value == "lb" && toCurrency.value == "kg") {
        let calculo = entered_value.value / 2.205;
        document.getElementById("resultado").value = calculo.toFixed(2);
    }
    //Converter Libra para G
    if (fromCurrency.value == "lb" && toCurrency.value == "g") {
        let calculo = entered_value.value * 453.6;
        document.getElementById("resultado").value = calculo.toFixed(2);
    }
    //Converter libra para MG
    if (fromCurrency.value == "lb" && toCurrency.value == "mg") {
        let calculo = entered_value.value * 453600;
        document.getElementById("resultado").value = calculo.toFixed(2);
    }
    // Caso for o mesma unidade de conversao
    else if (fromCurrency.value == toCurrency.value) {
        document.getElementById("resultado").value = entered_value.value;
    }
    } catch (erro){
        console.error("Não foi possivel buscar dados: ", erro);
    }

};

//Exporta as variaveis para o script.js
export default {tipoConversao, fromCurrency, toCurrency, entered_value, input_result};