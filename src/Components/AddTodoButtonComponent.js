import React from 'react';
import '../css/Button.css'

function AddTodoButton(props) {

  const onClickButton = (msg) => {
    alert(msg);
  };

    return (
      <button 
        className='btn'
        onClick={() => onClickButton('Se ha creado una alerta')}
      >
        +
      </button>
    );
}

export {AddTodoButton};