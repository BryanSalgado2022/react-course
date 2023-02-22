import React from 'react';
import '../css/Counter.css';

function Counter({total, completed}){

    return(
        <h2 className='counterTitle'>Has completado {completed} de {total} Todo's</h2>
    );
}

export {Counter};
