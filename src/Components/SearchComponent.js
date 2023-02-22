import React from 'react'
import '../css/Search.css';
import { useState } from 'react';


function Search ({search, setSearch}) {
    //React Hooks, son los que se llaman con el USE

    //Los eventos onChange registran cualquier cambio que exista dentro del aplicativo
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearch(event.target.value);
    };

    return (
        <input 
            type="text" 
            className='searchInput' 
            placeholder='Cebolla'
            value={search}
            //Cuando se envian parametros a una funcion es necesario envolverla en otra arrow function
            onChange={onSearchValueChange}    
        />
    );
}

export {Search};