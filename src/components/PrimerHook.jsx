import React, { useEffect, useState } from 'react';


// Primer forma
export default function PrimerHook() {
    const [ listPokemon, setListPokemon ] = useState([]);
    const [ load, setLoad ] = useState(true);
    const [ limit, setLimit] = useState(1);

    const changeLimit = () => {
        setLimit(limit + 1)
    }

    useEffect(() => {
        setLoad(true);
        const result = async () => {
            const result = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=1&limit=${limit}`);
            const json = await result.json()
            setListPokemon(json.results)
            setLoad(false)
        };
        result();
    }, [limit])

    useEffect(() => {
        return () => console.log('I am unmounting')
    }, [])

    return (
        <div>
            <div>
                {load ? (
                        <h2>Cargando...</h2>
                    ) : (
                        <ul>
                            {
                                listPokemon.map((item, index) => {
                                    return <li key={index}>{item.name}</li>            
                                })
                            }
                        </ul>
                )}
            </div>
            <div>
                <button onClick={changeLimit}>Aumentar l&iacute;mite</button>
            </div>
        </div>
    );
}

// Segunda forma
/* const PrimerHook = () => {
    return <h4>Mi primer hook</h4>
}

export default PrimerHook;

// Tercera forma
export default () => {
    return <h4>Mi primer hook</h4>
} */