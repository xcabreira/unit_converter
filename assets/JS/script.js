// Pega os dados da escolha do tipo de conversão
const tipoConversao = document.getElementById("tipo")
// Pega os dados da escolha fromCurrency e toCurrency
const fromCurrency = document.getElementById("fromCurrency")
const toCurrency = document.getElementById("toCurrency")
// Pega o valor inserido
let enteredValue = document.getElementById("enteredValue");
let inputResult = document.getElementById("resultado");

const conversoes = {
    massa: {
        kg: 1,
        g: 0.001,
        mg: 0.0001,
        lb: 2.205
    },
    medidas: {
        mt: 1,
        cm: 0.01,
        mm: 0.001,
        pol: 39.37
    }

};

// Função para conversao das unidades
function converterUnidades(valor, categoria, origem, destino) {
    try {
        const unidades = conversoes[categoria];
        const resultado = valor * unidades[origem] / unidades[destino];
        return document.getElementById("resultado").value = resultado.toPrecision(4);
    } catch (error) {
        inputResult.placeholder = `Erro ao converter`;
    }
};

//Função que busca na API a conversao em tempo real
async function converterMoedasApi(origem, destino, valor) {
    try {
        if (origem === destino) {
            document.getElementById("resultado").value = valor;
            return;
        }
        const resposta = await fetch(`https://economia.awesomeapi.com.br/json/last/${origem}-${destino}`);
        const dados = await resposta.json();

        const chaveConversao = `${origem}${destino}`;
        const resultado = valor * Number(dados[chaveConversao].bid);

        return document.getElementById("resultado").value = resultado.toFixed(2);
    } catch (error) {
        inputResult.placeholder = `Conversão não encontrada!`;
    }
}

// Função para desabilitar input se nao escolher a conversão
tipoConversao.addEventListener('change', () => {
    if (tipoConversao.value === "none") {
        enteredValue.disabled = true;
        enteredValue.placeholder = ("Escolha o tipo de conversão!");
    } else {
        enteredValue.disabled = false;
    }
});

//Verificando se o numero é negativo ou contem outros caracteres
enteredValue.addEventListener('input', () => {
    if (enteredValue.value < 0) {
        enteredValue.placeholder = "Apenas numeros positivos!";
        enteredValue.value = "";
    }
     enteredValue.value = enteredValue.value.replace(/[eE+-]/g, "");
});

//Função para resetar campos
function reset() {
    enteredValue.style.border = ('none');
    enteredValue.placeholder = "Insira um valor: ";
    enteredValue.value = "";
    inputResult.value = "";
};

// Função para verificar qual o tipo da conversao
tipoConversao.addEventListener('change', () => {
    if (tipoConversao.value === "medidas") {
        fromCurrency.innerHTML = (`
                <option value="cm">Centimetros</option>
                <option value="mt">Metros</option>
                <option value="mm">Milimetros</option>
                <option value="pol">Polegadas</option>`);
        toCurrency.innerHTML = (`
                <option value="mt">Metros</option>
                <option value="cm">Centimetros</option>
                <option value="mm">Milimetros</option>
                <option value="pol">Polegadas</option>`);
        reset();
    }
    if (tipoConversao.value === "massa") {
        fromCurrency.innerHTML = (`
                <option value="kg">Quilograma</option>
                <option value="g">Grama</option>
                <option value="mg">Miligrama</option>
                <option value="lb">Libra</option> `);
        toCurrency.innerHTML = (`
                <option value="g">Grama</option>
                <option value="kg">Quilograma</option>
                <option value="mg">Miligrama</option>
                <option value="lb">Libra</option> `);
        reset();
    }
    if (tipoConversao.value === "moeda") {
        fromCurrency.innerHTML = (`
                <option value="BRL">Real Brasileiro</option>
                <option value="USD">Dolár Americano</option>
                <option value="EUR">Euro</option>
                <option value="CLP">Peso Chileno</option>`);
        toCurrency.innerHTML = (`
                <option value="USD">Dolár Americano</option>
                <option value="BRL">Real Brasileiro</option>
                <option value="EUR">Euro</option>
                <option value="CLP">Peso Chileno</option>`);
        reset();
    }
    if (tipoConversao.value === "none") {
        fromCurrency.innerHTML = (`
                <option value=""></option>
                <option value="" disabled>Escolha um tipo de conversão</option>`);
        toCurrency.innerHTML = (`
                <option value=""></option>
                <option value="" disabled>Escolha um tipo de conversão</option> `);
        enteredValue.placeholder = "Escolha primeiro o tipo de conversão!";
        enteredValue.value = "";
        inputResult.value = "";
    }
});

//Evento para conversão direta
enteredValue.addEventListener('input', () => {
    if (tipoConversao.value === "moeda") {
        converterMoedasApi(
            toCurrency.value,
            fromCurrency.value,
            enteredValue.value);
    } else {
        converterUnidades(
            enteredValue.value,
            tipoConversao.value,
            fromCurrency.value,
            toCurrency.value);
    }
});

//Evento de Conversao automatica na troca de unidades
function atualizarConversao() {
    if (tipoConversao.value === "moeda") {
        converterMoedasApi(
            toCurrency.value,
            fromCurrency.value,
            enteredValue.value);
    } else {
        converterUnidades(
            enteredValue.value,
            tipoConversao.value,
            fromCurrency.value,
            toCurrency.value);
    }
}
enteredValue.addEventListener('change', atualizarConversao);
fromCurrency.addEventListener('change', atualizarConversao);
toCurrency.addEventListener('change', atualizarConversao);

