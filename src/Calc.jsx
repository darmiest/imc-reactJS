import React, { Component } from "react";
import "./Calc.css"

function MessageIMC(result) {
    if (result < 18)
        return "Você está abaixo do peso."
    else if (result < 24)
        return "Você está no peso normal."
    else if (result < 30)
        return "Você está acima do peso."
    else if (result > 30)
        return "Tome cuidado, você está com sobrepeso!"
}
class Calc extends Component {
    constructor(props) {
        super(props)
        this.state = {
            massa: 0,
            altura: 0,
            valor: ""
        }

        this.handleAltura = this.handleAltura.bind(this);
        this.handleMassa = this.handleMassa.bind(this);
        this.clickCalcImc = this.clickCalcImc.bind(this);
    }

    handleMassa(event) {
        this.setState({ massa: event.target.value })

    }
    handleAltura(event) {
        this.setState({ altura: event.target.value })
    }
    clickCalcImc() {
        const { massa, altura } = this.state;
        let valor = massa / (altura * altura)
        this.setState({ valor })
    }
    render() {
        const valor = this.state.valor;
        const result = Number.isNaN(parseFloat(valor)) ? "0" : valor
        const messageImc = MessageIMC(result)
        return (
            <div className="calc">
                <label htmlFor="peso">Peso: </label>
                <input type="text" onChange={this.handleMassa} id="peso" placeholder="Informe o seu peso..." autoFocus />
                <label htmlFor="altura">Altura: </label>
                <input type="text" onChange={this.handleAltura} id="altura" placeholder="Informe sua altura..." />
                <button onClick={this.clickCalcImc}>Calcular IMC</button>
                {
                    valor > 0 &&
                    <p><strong>IMC: </strong>{parseFloat(result).toFixed(2)}</p>
                }
                {
                    result > 0 &&
                    <p className="mensagem">{messageImc}</p>
                }

            </div>
        )
    }
}

export default Calc;
