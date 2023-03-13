import React from 'react';
import { Counter } from '../CounterComponent'
import { Search } from '../SearchComponent';
import { List } from '../ListComponent';
import { Item } from '../ItemComponent';
import { AddTodoButton } from '../AddTodoButtonComponent';

function AppUI({
    totalTodos,
    completedTodos,
    search,
    setSearch,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
    return(
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
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))
      }
    </List>
    <AddTodoButton/>
    
  </>
    );
}

export { AppUI }
