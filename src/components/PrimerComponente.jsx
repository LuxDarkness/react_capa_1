import React, {Component} from 'react';
import BotonComponente from './BotonComponente';

class PrimerComponente extends Component {
    state = {
        mensaje: 'sumar',
        listPokemon: [],
        load: true
    };

    componentDidMount(){
        const result = async () => {
            const result = await fetch("https://pokeapi.co/api/v2/pokemon?offset=100&limit=100");
            const json = await result.json()
            this.setState({
                listPokemon: json.results,
                load: false
            });
        };
        result();
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.load !== this.state.load) {
            console.log('El estado load cambió.')
        }
    }

    componentWillUnmount(){
        console.log('Objeto desmontado.')
    }

    render() {
        return(
            <div className='row'>
                <h2>Primer componente</h2>
                <BotonComponente mensaje={this.state.mensaje} />
                {this.state.load ? (
                    <h2>Cargando...</h2>
                ) : (
                    <ul>
                        {
                            this.state.listPokemon.map((item, index) => {
                                return <li key={index}>{item.name}</li>            
                            })
                        }
                    </ul>
                )}
            </div>
        )
    }
}

export default PrimerComponente;