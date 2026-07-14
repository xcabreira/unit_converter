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

// Função para verificar qual o tipo da conversao
function typeConvert(){
    if (tipoConversao.value === "medidas"){
        fromCurrency.innerHTML = (`
                <option value="cm">Centimetros</option>
                <option value="mt">Metros</option>
                <option value="mm">Milimetros</option>
                <option value="pol">Polegadas</option>`);
        toCurrency.innerHTML = (`
                <option value="cm">Centimetros</option>
                <option value="mt">Metros</option>
                <option value="mm">Milimetros</option>
                <option value="pol">Polegadas</option>`);
    }
    if (tipoConversao.value === "moeda"){
        fromCurrency.innerHTML = (`
                <option value="usd">Dolar Americano</option>
                <option value="brl">Real Brasileiro</option>
                <option value="eur">Euro</option>
                <option value="clp">Pesos Chilenos</option>  `);
        toCurrency.innerHTML = (`
                <option value="usd">Dolar Americano</option>
                <option value="brl">Real Brasileiro</option>
                <option value="eur">Euro</option>
                <option value="clp">Pesos Chilenos</option>
            `);
    }
    if (tipoConversao.value === "massa"){
        fromCurrency.innerHTML = (`
                <option value="kg">Quilograma</option>
                <option value="g">Grama</option>
                <option value="mg">Miligrama</option>
                <option value="lb">Libras</option> `);
        toCurrency.innerHTML = (`
                <option value="kg">Quilograma</option>
                <option value="g">Grama</option>
                <option value="mg">Miligrama</option>
                <option value="lb">Libras</option> `);
    }
}

// Função para conversão
async function convert() {
    const resposta = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL,USD-EUR,USD-CLP,BRL-USD,BRL-EUR,BRL-CLP,EUR-USD,EUR-CLP,EUR-BRL,CLP-USD,CLP-EUR,CLP-BRL");
    const dados = await resposta.json();

    //MOEDAS
    // Dolar para Real BR
    if (fromCurrency.value === "usd" && toCurrency.value === "brl"){
        var calculo = entered_value.value * dados.USDBRL.bid;
        document.getElementById("resultado").value = calculo.toFixed(2);
    }
    // Dolar USD para Euro Eur
    else if (fromCurrency.value === "usd" && toCurrency.value === "eur"){
        var calculo = entered_value.value * dados.USDEUR.bid;
        document.getElementById("resultado").value = calculo.toFixed(2);
    }
     // Dolar USD para Peso chileno CLP
    else if (fromCurrency.value === "usd" && toCurrency.value === "clp"){
        var calculo = entered_value.value * dados.USDCLP.bid;
        document.getElementById("resultado").value = calculo.toFixed(2);
    }
    // Real Br para Dolar USD
    else if (fromCurrency.value === "brl" && toCurrency.value === "usd"){
        var calculo = entered_value.value * dados.BRLUSD.bid;
        document.getElementById("resultado").value = calculo.toFixed(2);
    }
    // Real Br para Euro Eur
    else if (fromCurrency.value === "brl" && toCurrency.value === "eur"){
        var calculo = entered_value.value * dados.BRLEUR.bid;
        document.getElementById("resultado").value = calculo.toFixed(2);
    }
    // Real para Peso chileno CLP
    else if (fromCurrency.value === "brl" && toCurrency.value === "clp"){
        var calculo = entered_value.value * dados.BRLCLP.bid;
        document.getElementById("resultado").value = calculo.toFixed(2);
    }
    // Euro Eur para dolar usd
    else if (fromCurrency.value === "eur" && toCurrency.value === "usd"){
        var calculo = entered_value.value * dados.EURUSD.bid;
        document.getElementById("resultado").value = calculo.toFixed(2);
    }
    // Euro Eur para Peso chileno CLP
    else if (fromCurrency.value === "eur" && toCurrency.value === "clp"){
        var calculo = entered_value.value * dados.EURCLP.bid;
        document.getElementById("resultado").value = calculo.toFixed(2);
    }
    // Euro Eur para Real Brasileiro
    else if (fromCurrency.value === "eur" && toCurrency.value === "brl"){
        var calculo = entered_value.value * dados.EURBRL.bid;
        document.getElementById("resultado").value = calculo.toFixed(2);
    }
    // Peso chileno para Real BR
    else if (fromCurrency.value === "clp" && toCurrency.value === "brl"){
        var calculo = entered_value.value * dados.CLPBRL.bid;
        document.getElementById("resultado").value = calculo.toFixed(2);
    }
    // Peso chileno para Euro eur
    else if (fromCurrency.value === "clp" && toCurrency.value === "eur"){
        var calculo = entered_value.value * dados.CLPEUR.bid;
        document.getElementById("resultado").value = calculo.toFixed(2);
    }
    // Peso chileno para dolar usd
    else if (fromCurrency.value === "clp" && toCurrency.value === "usd"){
        var calculo = entered_value.value * dados.CLPUSD.bid;
        document.getElementById("resultado").value = calculo.toFixed(2);
    }
    

    // MEDIDAS

    // Converte CM para Metros
    if (fromCurrency.value == "cm" && toCurrency.value == "mt") {
        var calculo = entered_value.value / 100;
        document.getElementById("resultado").value = calculo;
    }
    // Converte CM para MM
    if (fromCurrency.value == "cm" && toCurrency.value == "mm") {
        var calculo = entered_value.value * 10;
        document.getElementById("resultado").value = calculo;
    }
    // Converte CM para Polegadas
    if (fromCurrency.value == "cm" && toCurrency.value == "pol") {
        var calculo = entered_value.value / 2.54;
        document.getElementById("resultado").value = calculo;
    }
    // Converte Metros para CM
     if (fromCurrency.value == "mt" && toCurrency.value == "cm") {
        var calculo = entered_value.value * 100;
        document.getElementById("resultado").value = calculo;
    }
    // Converter Metros para MM
     if (fromCurrency.value == "mt" && toCurrency.value == "mm") {
        var calculo = entered_value.value * 1000;
        document.getElementById("resultado").value = calculo;
    }
}

