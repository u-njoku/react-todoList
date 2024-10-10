import React from 'react'

function TodoCard(props) {
    const { children, handleDeleteTodo, index, handleEditTodo, handleCompleteTodo } = props
  return (
    <div>

<div> 
      <li className ='todoItem'>
      {children}
        <div className='actionsContainer' >

        <button onClick={() => 
                {
                   handleCompleteTodo(index)
                    
                }
            }>
                <i class="fa-regular fa-square-check"></i>
                </button>  
            <button onClick={() => 
                {
                    handleEditTodo(index)
                    
                }
            }> <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button onClick={() => 
                {
                    handleDeleteTodo(index)
                    
                }
            }>
                
                <i className="fa-solid fa-trash"></i>
                </button>
                 
        
        </div>
              
              </li>
    </div>
    

    </div>
    
  )
}

export default TodoCard
