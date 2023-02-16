import logo from './logo.svg';
//import './App.css';
import React from 'react';
import { Counter } from './Components/CounterComponent';
import { Search } from './Components/SearchComponent';
import { List } from './Components/ListComponent';
import { Item } from './Components/ItemComponent';
import { AddTodoButton } from './Components/AddTodoButtonComponent';


const todos = [
  {text:'Cortar cebolla', completed: false},
  {text:'Tomar los cursos', completed: false},
  {text:'Comprar el mercado', completed: false}
];

//Las props se deben recibir como argumentos dentro del componente
function App(/*props*/) {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {
            //Las props.propiedades están llamando al contenido que viene desde index.js
            //props.propiedades
            //para llamar las propiedades children, se hace de la siguiente manera:
            props.children
          }
        </a>
      </header>
    </div>*/

    //React fragment renderiza un espacio invisible el cual no afectará la estructura del HTML
    <>
      <Counter/>
      <Search/>
      <List>
        {
          todos.map((todo) => (
            <Item key={todo.text} text={todo.text}/>
          ))
        }
      </List>
      <AddTodoButton/>
      
    </>
  );
}

export default App;
