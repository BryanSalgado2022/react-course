import logo from './logo.svg';
import { useState } from 'react';
//import './App.css';
import React from 'react';
import { Counter } from './Components/CounterComponent';
import { Search } from './Components/SearchComponent';
import { List } from './Components/ListComponent';
import { Item } from './Components/ItemComponent';
import { AddTodoButton } from './Components/AddTodoButtonComponent';


const defaultTodos = [
  {text:'Cortar cebolla', completed: true},
  {text:'Tomar los cursos', completed: true},
  {text:'Comprar el mercado', completed: false}
];

//Las props se deben recibir como argumentos dentro del componente
function App(/*props*/) {
  const [todos, setTodos] = useState(defaultTodos);
  const [search, setSearch] = useState();

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if(!search.length >= 1){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchtext = search.toLowerCase();
      todoText.includes(searchtext);
    })  
  }
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
      <Counter
        total={totalTodos}
        completed={completedTodos}
      />
      <Search
        searchValue={search}
        setSearch={setSearch}
      />
      <List>
        {
          searchedTodos.map((todo) => (
            <Item 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
            />
          ))
        }
      </List>
      <AddTodoButton/>
      
    </>
  );
}

export default App;
