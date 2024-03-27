import React, { useEffect } from 'react';


const PokemonPage = () => {

    const getApi = async() => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
            const  data = await response.json()
            console.log(data);
            return data
        } catch(e) {
            console.log('Error', e.message);
        } finally {
        }


    };

    useEffect(() => {
        getApi()
    }, []);
    return (
        <div>

        </div>
    );
};

export default PokemonPage;