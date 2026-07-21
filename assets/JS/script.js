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

function converterUnidades(valor, categoria, origem, destino) {
    const unidades = conversoes[categoria];
    const resultado = valor * unidades[origem] / unidades[destino];
    return document.getElementById("resultado").value = resultado.toPrecision(4);
};

async function converterMoedasApi(valor, origem, destino) {
    const resposta = await fetch(`https://economia.awesomeapi.com.br/json/last/${origem}-${destino}`); 
    const dados = await resposta.json();

    return valor * dados.value;

}

  console.log(converterMoedasApi(1, "BRL", "USD"));

// USD-BRL,USD-EUR,USD-CLP,BRL-USD,BRL-EUR,BRL-CLP,EUR-USD,EUR-CLP,EUR-BRL,CLP-USD,CLP-EUR,CLP-BRL
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
    if (tipoConversao.value === "moeda") {
        fromCurrency.innerHTML = (`
                <option value="USD">Dolar Americano</option>
                <option value="BRL">Real Brasileiro</option>
                <option value="EUR">Euro</option>
                <option value="CLP">Pesos Chilenos</option>  `);
        toCurrency.innerHTML = (`
                <option value="BRL">Real Brasileiro</option>
                <option value="USD">Dolar Americano</option>
                <option value="EUR">Euro</option>
                <option value="CLP">Pesos Chilenos</option>
            `);
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

// Desativação e aviso de erro
enteredValue.addEventListener('input', (input) => {
    if (tipoConversao.value === "none") {
        enteredValue.placeholder = "Escolha primeiro o tipo de conversão!";
        input.preventDefault();
        enteredValue.style.border = ('solid 3px red');
    }
    else if (tipoConversao.value <= 0) {
        enteredValue.placeholder = "O numero não pode ser negativo";
        input.preventDefault();
        enteredValue.style.border = ('solid 3px red');
    };
});

//Evento para conversão direta
enteredValue.addEventListener('input', () => {
    converterUnidades(enteredValue.value, tipoConversao.value, fromCurrency.value, toCurrency.value);
});

//Evento de Conversao automatica na troca de unidades
fromCurrency.addEventListener('change', () => {
    converterUnidades(enteredValue.value, tipoConversao.value, fromCurrency.value, toCurrency.value);
});
toCurrency.addEventListener('change', () => {
    converterUnidades(enteredValue.value, tipoConversao.value, fromCurrency.value, toCurrency.value);
});

