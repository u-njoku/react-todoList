import React from 'react'
import TodoCard from './TodoCard'
import CompTodoCard from './CompTodoCard'


function TodoList(props) {

      const {todos, handleDeleteTodo, compTodos, setTodos} = props
      return (
        <ul className='main'>
          {todos.map((todo, todoIndex) => {
            return(
              <div>
                <TodoCard {...props} key={todoIndex} index = {todoIndex}>
                <p>{todo}</p>
              </TodoCard>
              
              
              </div>
              
            )
          })}

          {compTodos?.map((compTodo, compTodoIndex) => {
            return(
              <div>
                <CompTodoCard {...props} key={compTodoIndex} index = {compTodoIndex}>
                <strike>{compTodo}</strike>
              </CompTodoCard>
              
              
              </div>
              
            )
          })}
        </ul>
    
    )
}

export default TodoList
