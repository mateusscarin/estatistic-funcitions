const formulas = document.getElementsByName("formulaSelecionada");
const parametros = document.getElementById("parametros");
const resultado = document.getElementById("resultado");

let formulaSelecionada;

const montaParametros = () => {
    for (let radio of formulas)
        if (radio.checked)
            formulaSelecionada = Number(radio.value);
    switch (formulaSelecionada) {
        case 0:
            parametros.innerHTML = `
                <div><label>Média:</label>
                <input type="text"> </div>
                <div><label>Desvio padrão:</label>
                <input type="text"></div>
                <div>
                <label>Grau de confiança:</label>
                <div><input type="radio" name="grauConfianca"><span>90%</span></div>
                <div><input type="radio" name="grauConfianca"><span>95%</span></div>
                <div><input type="radio" name="grauConfianca"><span>99%</span></div>
                </div>
                <div><label>Tamanho da amostra:</label>
                <input type="text"> </div>
                <input type="submit" onclick="mostraResultado()">`;
            break;
        case 1:
            parametros.innerHTML = `
                <div><label>Média:</label>
                <input type="text"> </div>
                <div><label>Desvio padrão:</label>
                <input type="text"></div>
                <div>
                <label>Grau de confiança:</label>
                <div><input type="radio" name="grauConfianca"><span>90%</span></div>
                <div><input type="radio" name="grauConfianca"><span>95%</span></div>
                <div><input type="radio" name="grauConfianca"><span>99%</span></div>
                </div>
                <div><label>Tamanho da amostra:</label>
                <input type="text"> </div>
                <input type="submit" onclick="mostraResultado()">`;
            break;
        case 2:
            parametros.innerHTML = `
            <div><label>Média:</label>
            <input type="text"> </div>
            <div><label>Desvio padrão:</label>
            <input type="text"></div>
            <div>
            <label>Grau de confiança:</label>
            <div><input type="radio" name="grauConfianca"><span>90%</span></div>
            <div><input type="radio" name="grauConfianca"><span>95%</span></div>
            <div><input type="radio" name="grauConfianca"><span>99%</span></div>
            </div>
            <div><label>Tamanho da amostra:</label>
            <input type="text"> </div>
            <input type="submit" onclick="mostraResultado()">`;
            break;
        case 3:
            parametros.innerHTML = `
            <div><label>Média:</label>
            <input type="text"> </div>
            <div><label>Desvio padrão:</label>
            <input type="text"></div>
            <div>
            <label>Grau de confiança:</label>
            <div><input type="radio" name="grauConfianca"><span>90%</span></div>
            <div><input type="radio" name="grauConfianca"><span>95%</span></div>
            <div><input type="radio" name="grauConfianca"><span>99%</span></div>
            </div>
            <div><label>Tamanho da amostra:</label>
            <input type="text"> </div>
            <input type="submit" onclick="mostraResultado()">`;
            break;
        default:
            console.log(formulaSelecionada);
            break;
    }
}

const mostraResultado = () => {
    resultado.innerHTML = `O resultado é: 2,4`;
}