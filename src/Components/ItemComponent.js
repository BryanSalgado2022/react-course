import React from 'react';
import '../css/Item.css';

function Item(props) {
    
  const onComplete = () => {
    alert('Ya completaste el Todo ' + props.text)
  };
  const onDelete = () => {
    alert('Has eliminado el Todo' + props.text)
  };
  
  return (
      <li className='TodoItem'>
        <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
          onClick={onComplete}
        >
          √
        </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>
        <span className='Icon Icon-delete'
         onClick={onDelete} 
        >X</span>
      </li>
    );
}

export {Item};