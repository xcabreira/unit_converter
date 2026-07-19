import {convert} from './converter.js';
import dados from './converter.js'

//Função para resetar campos
function reset (){
    dados.entered_value.style.border = ('none');
    dados.entered_value.placeholder = "Insira um valor: ";
    dados.entered_value.value = "";
    dados.input_result.value = "";
};

// Função para verificar qual o tipo da conversao
dados.tipoConversao.addEventListener('change', () => {
    if (dados.tipoConversao.value === "medidas"){
        dados.fromCurrency.innerHTML = (`
                <option value="cm">Centimetros</option>
                <option value="mt">Metros</option>
                <option value="mm">Milimetros</option>
                <option value="pol">Polegadas</option>`);
        dados.toCurrency.innerHTML = (`
                <option value="mt">Metros</option>
                <option value="cm">Centimetros</option>
                <option value="mm">Milimetros</option>
                <option value="pol">Polegadas</option>`);
        reset();
    }
    if (dados.tipoConversao.value === "moeda"){
        dados.fromCurrency.innerHTML = (`
                <option value="usd">Dolar Americano</option>
                <option value="brl">Real Brasileiro</option>
                <option value="eur">Euro</option>
                <option value="clp">Pesos Chilenos</option>  `);
        dados.toCurrency.innerHTML = (`
                <option value="brl">Real Brasileiro</option>
                <option value="usd">Dolar Americano</option>
                <option value="eur">Euro</option>
                <option value="clp">Pesos Chilenos</option>
            `);
        reset();
    }
    if (dados.tipoConversao.value === "massa"){
        dados.fromCurrency.innerHTML = (`
                <option value="kg">Quilograma</option>
                <option value="g">Grama</option>
                <option value="mg">Miligrama</option>
                <option value="lb">Libra</option> `);
        dados.toCurrency.innerHTML = (`
                <option value="g">Grama</option>
                <option value="kg">Quilograma</option>
                <option value="mg">Miligrama</option>
                <option value="lb">Libra</option> `);
        reset();
    }
    if (dados.tipoConversao.value === "none"){
        dados.fromCurrency.innerHTML = (`
                <option value=""></option>
                <option value="" disabled>Escolha um tipo de conversão</option>`);
        dados.toCurrency.innerHTML = (`
                <option value=""></option>
                <option value="" disabled>Escolha um tipo de conversão</option> `);
        dados.entered_value.placeholder = "Escolha primeiro o tipo de conversão!";
        dados.entered_value.value = "";
        dados.input_result.value = "";
    }
});

// Desativação e aviso de erro
dados.entered_value.addEventListener('input', (input) => {
    if (dados.tipoConversao.value === "none"){
        dados.entered_value.placeholder = "Escolha primeiro o tipo de conversão!";
        input.preventDefault();
        dados.entered_value.style.border = ('solid 3px red');
}
});

//Evento para conversão direta
dados.entered_value.addEventListener('input', () => {
    convert();
});

//Evento de Conversao automatica na troca de unidades
dados.fromCurrency.addEventListener('change', () => {
    convert();
});
dados.toCurrency.addEventListener('change', () => {
    convert();
});

