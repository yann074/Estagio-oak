import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import Todoform from './components/Todoform'
import todo from './components/Todo'

function App() {
    const[todos, setTodos] = useState([
      {
        Id: 1,
        Nome: "Carros",
        Descricao: "Automovel bem vendido",
        Valor: 1200.00,
        DispVenda: false,
      }
    ])

    const addTodo = (Nome, Desc, Valor) =>{
      const newTodos = [...todos, {
        Id: Math.floor(Math.random() * 10000),
        Nome, 
        Desc,
        Valor,
        DispVenda: false
      },];

      setTodos(newTodos)
    }

  return (
    <>
     <div className="app">
            <h1>Lista de Produtos</h1>
            <div className="todo-list">
                {todos.map((todo)=> (
                    <Todo key={todo.Id} todo={todo} />
                
                ))}
            </div>
              <Todoform addTodo={addTodo} />
        </div>
    </>
  );
}

export default App
