import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() {
 
  const [todos, setTodos] = useState([])
  const [compTodos, setCompTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')
  const [compTodoValue, setCompTodoValue] = useState('')


  function persistData(newList)
  {
    localStorage.setItem('todos', JSON.stringify({todos:newList}))
   
   
  }
  function persistCompData(newList)
  {
   
    localStorage.setItem('compTodos', JSON.stringify({compTodos:newList}))
   
  }


    function handleAddTodos(newTodo)
    {
      
      
      const newTodoList = [... todos, newTodo]
      persistData(newTodoList)
      setTodos(newTodoList)
    }


    function handleDeleteTodo(index)
    {
      const newTodoList = todos.filter((todo, todoIndex)  =>
      {
        return todoIndex !== index
      })
      persistData(newTodoList)
      setTodos(newTodoList)
    }
    function handleEditTodo(index)
    {
      
      const valuToBeEdited = todos[index]
      console.log(valuToBeEdited)
      setTodoValue(valuToBeEdited)
      console.log("we got here")
      handleDeleteTodo(index)
      console.log("oh no")


    }
    function handleCompleteTodo(index)
    {
      
      const newCompTodo = todos[index]
      const newCompTodoList = [... compTodos, newCompTodo]
     
      setCompTodos(newCompTodoList)
      persistCompData(newCompTodoList)
      handleDeleteTodo(index)
    }
    function handleUnCompleteTodo(index)
    {
      const taskUnfinished = compTodos[index]
      console.log(taskUnfinished)
      const newTodoList = [... todos, taskUnfinished]
      persistData(newTodoList)  
      setTodos(newTodoList)
      handleDeleteCompTodo(index)
    }
    function handleDeleteCompTodo(index)
    {
      const newCompTodoList = compTodos.filter((compTodo, compTodoIndex)  =>
        {
          return compTodoIndex !== index
        })
        persistCompData(newCompTodoList)
        setCompTodos(newCompTodoList)
    }


    useEffect(() =>
      {
        if(!localStorage)
        {
          return
        }


        let localTodos = localStorage.getItem('todos')
        if(localTodos)
        {
          localTodos = JSON.parse(localTodos).todos
        setTodos(localTodos)
        }


        let localCompTodos = localStorage.getItem('compTodos');
        

        if(localCompTodos)
        {
          localCompTodos = JSON.parse(localCompTodos).compTodos
        setCompTodos(localCompTodos)
        }
       
      }, [])
  return (
    <>
      <TodoInput todoValue = {todoValue} setTodoValue = {setTodoValue} handleAddTodos = {handleAddTodos}/>
      <TodoList handleEditTodo = {handleEditTodo} handleDeleteTodo  = {handleDeleteTodo} todos = {todos} compTodos = {compTodos}
      handleCompleteTodo = {handleCompleteTodo} handleUnCompleteTodo = {handleUnCompleteTodo} handleDeleteCompTodo = {handleDeleteCompTodo}/>
    </>
  )
}


export default App



