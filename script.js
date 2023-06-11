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
            <div>
                <label>Média:</label>
                <input type="text" id="media">
            </div>
            <div>
                <label>Desvio padrão:</label>
                <input type="text" id="desvioPadrao">
            </div>
            <div>
                <label>Tamanho da amostra:</label>
                <input type="text" id="tamanhoAmostra">
            </div>
            <div>
                <label>Grau de confiança:</label>
                <div>
                    <input type="radio" name="grauConfianca" value="1.645"><span>90%</span>
                </div>
                <div>
                    <input type="radio" name="grauConfianca" value="1.96"><span>95%</span>
                </div>
                <div>
                    <input type="radio" name="grauConfianca" value="2.575"><span>99%</span>
                </div>
            </div>
            <input type="submit" onclick="mostraResultado()">`;
            break;
        case 1:
            parametros.innerHTML = `
            <div>
                <label>Número de sucesso:</label>
                <input type="text" id="numSucesso">
            </div>
            <div>
                <label>Tamanho da amostra:</label>
                <input type="text" id="tamanhoAmostra">
            </div>
            <div>
                <label>Grau de confiança:</label>
                <div>
                    <input type="radio" name="grauConfianca" value="1.645"><span>90%</span>
                </div>
                <div>
                    <input type="radio" name="grauConfianca" value="1.96"><span>95%</span>
                </div>
                <div>
                    <input type="radio" name="grauConfianca" value="2.575"><span>99%</span>
                </div>
            </div>
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
            <div><input type="radio" name="grauConfianca" value="1.645"><span>90%</span></div>
            <div><input type="radio" name="grauConfianca" value="1.96"><span>95%</span></div>
            <div><input type="radio" name="grauConfianca" value="2.575"><span>99%</span></div>
            </div>
            <div><label>Tamanho da amostra:</label>
            <input type="text"> </div>
            <input type="submit" onclick="mostraResultado()">`;
            break;
        case 3:
            parametros.innerHTML = `
            <div><label>Média:</label>
            <input type="number"> </div>
            <div><label>Desvio padrão:</label>
            <input type="number" ></div>
            <div>
            <label>Grau de confiança:</label>
            <div><input type="radio" name="grauConfianca" value="1.645"><span>90%</span></div>
            <div><input type="radio" name="grauConfianca" value="1.96"><span>95%</span></div>
            <div><input type="radio" name="grauConfianca" value="2.575"><span>99%</span></div>
            </div>
            <div><label>Tamanho da amostra:</label>
            <input type="number" id="tamanhoAmostra"> </div>
            <input type="submit" onclick="mostraResultado()">`;
            break;
        default:
            console.log(formulaSelecionada);
            break;
    }
}

const mostraResultado = () => {
    let grauConfianca;
    for (let radio of document.getElementsByName('grauConfianca'))
        if (radio.checked)
            grauConfianca = Number(radio.value);
    switch (formulaSelecionada) {
        case 0:
            const desvioPadrao = Number(document.getElementById('desvioPadrao').value.replace(',', '.'));
            const media = Number(document.getElementById('media').value.replace(',', '.'));
            const tamanhoAmostra = Number(document.getElementById('tamanhoAmostra').value.replace('.', ','));
            let erroMed = calcularErroMedia(grauConfianca, desvioPadrao, tamanhoAmostra);
            resultado.innerHTML = `O erro médio é: ${(erroMed)}</br>
                                Intervalo de confiança: ${(media - erroMed)} < μ < ${(media + erroMed)}`;
            break;
        case 1:
            const p = Number(document.getElementById('numSucesso').value.replace(',', '.') 
            / document.getElementById('tamanhoAmostra').value.replace(',', '.'));
            const tamanhoAmostra2 = Number(document.getElementById('tamanhoAmostra').value.replace('.', ','));
            let erroProp = calcularErroProporcao(grauConfianca, p, tamanhoAmostra2);
            resultado.innerHTML = `O erro da proporção é: ${(erroProp)}</br>
                                Intervalo de confiança: ${(p - erroProp)} < μ < ${(p + erroProp)}`;
            break;
        case 2:
            resultado.innerHTML = `O resultado é: 2,4`;
            break;
        case 3:
            resultado.innerHTML = `O resultado é: 2,4`;
            break;
        default:
            console.log(formulaSelecionada);
            break;
    }
}

const calcularErroMedia = (grauConf, desvPad, tamAmostra) => {
    return grauConf * (desvPad / Math.sqrt(tamAmostra));
}

const calcularErroProporcao = (grauConf, p, tamAmostra) => {
    return grauConf * Math.sqrt((p * (1 - p)) / tamAmostra);
}
