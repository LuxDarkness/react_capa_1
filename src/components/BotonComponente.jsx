import React, {Component, Fragment} from 'react';

class BotonComponente extends Component {
    state = {
        contador: 0
    }

    componentDidMount(){
        this.setState({
            contador: 5
        })
    }

    sumar = () => {
        this.setState({
            contador: this.state.contador + 1
        })
    }

    reiniciar = () => {
        this.setState({
            contador: 0
        })
    }
    
    render() {
        return(
            <Fragment>
                <div>
                    <h1>{this.state.contador}</h1>
                    <button onClick={this.sumar}>
                        {this.props.mensaje}
                    </button>
                    <button onClick={this.reiniciar}>
                        reiniciar
                    </button>
                </div>
                {this.state.contador === 10 ? (<h4>Alerta, lleg&oacute; a diez.</h4>) : (<></>)}
            </Fragment>
        )
    }
}

export default BotonComponente;