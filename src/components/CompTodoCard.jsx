import React from 'react'

function CompTodoCard(props) {
    const { children, index, handleDeleteCompTodo, handleUnCompleteTodo } = props
  return (
    <div>

<div> 
      <li className ='compTodoItem'>
      {children}
        <div className='actionsContainer' >
            
        <button onClick={() => 
                {
                    handleUnCompleteTodo(index)
                    
                }
            }>
                <i class="fa-solid fa-square-check"></i>
                </button> 
            <button onClick={() => 
                {
                    handleDeleteCompTodo(index)
                    
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

export default CompTodoCard
