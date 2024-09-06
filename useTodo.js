import { useEffect, useReducer } from "react";
import { todosReducer } from "../08-useReducer/todoReducer";

const useTodo = () => {

    const init = () => {
        return JSON.parse( localStorage.getItem('todos') ) || [];
    }

    const [ todos, dispatch ] = useReducer(todosReducer, [], init)

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos])
    
    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] ADD Todo', 
            payload: todo  
        }

        dispatch( action );
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo', 
            payload: id
        });
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo', 
            payload: id
        });
    }


    const pendingTodosCount = todos.filter(todo => !todo.done).length 
        
    
  
    return {
        todos, 
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount
    }
}

export default useTodo;
