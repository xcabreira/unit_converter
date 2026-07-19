import {} from "./script.js";

// Pega os dados da escolha do tipo de conversão
const tipoConversao = document.getElementById("tipo")

// Pega os dados da escolha fromCurrency e toCurrency
const fromCurrency = document.getElementById("fromCurrency")
const toCurrency = document.getElementById("toCurrency")

// Pega o valor inserido
let entered_value = document.getElementById("enteredValue");
let input_result = document.getElementById("resultado");

const moedas = {
    usd: {
        nome: "Dólar Americano",
        simbolo: "$",
        converterPara: {
            brl: 5.20,
            eur: 0.92,
            clp: 850
        }
    },
    brl: {
        nome: "Real Brasileiro",
        simbolo: "R$",
        converterPara: {
            usd: 0.19,
            eur: 0.18,
            clp: 164
        }
    },
    eur: {
        nome: "Euro",
        simbolo: "€",
        converterPara: {
            usd: 1.09,
            brl: 5.56,
            clp: 950
        }
    }
};
const medidas = { 
            metros: {
                nome: "Metros",
                simbolo: "mt",
                converterPara: {
                    cm: 100,
                    mm: 1000,
                    pol: 39.37
                }
            }, 
            centimetros: {
                nome: "Centimetros",
                simbolo: "cm",
                converterPara: {
                    mt: 0.01,
                    mm: 10,
                    pol: 0.3937
                }
            }, 
            milimetros: {
                nome: "Milimetros",
                simbolo: "mm",
                converterPara: {
                    mt: 0.1,
                    cm: 0.001,
                    pol: 0.03937
                }
            }, 
            polegadas: {
                nome: "Polegadas",
                simbolo: "pol",
                converterPara: {
                    mt: 0.0254,
                    cm: 2.54,
                    mm: 25.4
                }
            }
};
const massas = {
            kilograma: {
                nome: "Kilograma",
                simbolo: "kg",
                converterPara: {
                    g: 1000,
                    mg: 1e+6,
                    lb: 2.205
                }
            },
            grama: {
                nome: "Grama",
                simbolo: "g",
                converterPara: {
                    kg: 0.001,
                    mg: 1000,
                    lb: 453.6
                }
            },
            miligrama: {
                nome: "Miligrama",
                simbolo: "mg",
                converterPara: {
                    kg: 1e+6,
                    g: 0.001,
                    lb: 453600
                }
            },
            libra: {
                nome: "Libra",
                simbolo: "lb",
                converterPara: {
                    kg: 0.453592,
                    g: 453.6,
                    mg: 453600
                }
            }
};

const conversoes = {
    moeda: moedas,
    medida: medidas,
    massa: massas
};

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
        alert("Offline, usando taxas aproximadas");
        console.error("Não foi possivel buscar dados: ", erro);
    }

};

//Exporta as variaveis para o script.js
export default {tipoConversao, fromCurrency, toCurrency, entered_value, input_result};