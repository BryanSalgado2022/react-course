import { useState } from 'react';
import React from 'react';
import { AppUI } from './Components/pages/AppUI';


const defaultTodos = [
  {text:'Cortar cebolla', completed: true},
  {text:'Tomar los cursos', completed: true},
  {text:'Comprar el mercado', completed: false}
];

//Las props se deben recibir como argumentos dentro del componente
function App(/*props*/) {
  const [todos, setTodos] = useState(defaultTodos);
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

    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);

    setTodos(newTodos);
  }
  return (
    <AppUI
      total={totalTodos}
      completed={completedTodos}
      searchValue={search}
      setSearch={setSearch}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
