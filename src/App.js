import { useEffect, useState } from 'react';
//import './App.css';
import React from 'react';
import { Counter } from './Components/CounterComponent';
import { Search } from './Components/SearchComponent';
import { List } from './Components/ListComponent';
import { Item } from './Components/ItemComponent';
import { AddTodoButton } from './Components/AddTodoButtonComponent';


/* const defaultTodos = [
  {text:'Cortar cebolla', completed: true},
  {text:'Tomar los cursos', completed: true},
  {text:'Comprar el mercado', completed: false}
]; */
function useLocalStorage(itemName, initialValue){
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      //El local Storage se encarga de guardar los objetos en el navegador
      //El asunto es que no guarda nada que no sea texto directamente
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;

      if(!localStorageItem){
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      }else{
        parsedItem = JSON.parse(localStorageItem);
      }

      setItem(parsedItem);
      setLoading(false);
    }, 1000);
  }, []);
  
  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
  };
}

//Las props se deben recibir como argumentos dentro del componente
function App(/*props*/
  loading, 
  error, 

) {

  const {
    item: todos, 
    saveItem: saveTodos, 
    loading: isLoading, 
  } = useLocalStorage('TODOS_V1', []);

  const [search, setSearch] = useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if(!search.length >= 1){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchtext = search.toLowerCase();
      return todoText.includes(searchtext);
    })  
  }


  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];

    //una forma
    // todos[todoIndex] = {
    //   text: todos[todoIndex].text,
    //   completed: true
    // };
    //Otra forma
    //newTodos[todoIndex].completed = true;
    //Tercera forma
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    //Se actualiza el estado con los Todos marcados

    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  //console.log('Render antes del UseEffect');

  //useEffect(() => {
    //console.log('Use Effect');
  //}, /* Solo se ejecutará una vez */ [] 
  /* ///////////////////////////
    Cuando hay cambios en el estado del contador de todos se actualiza de nuevo el useEffect
    [totalTodos]
    ////////////////////////////
    si se mantiene vacio el segundo argumento se ejecutará continuamente
  );*/

  //console.log('Render despues del useEffect');

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
      {error && <p>Hubo un error...</p>}
        {loading && <p>Está cargando no te apures</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer Todo</p>}
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

export default App;
