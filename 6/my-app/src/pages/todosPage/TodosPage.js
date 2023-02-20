import { useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { Todo } from "../../component/todo/Todo";

export default function TodosPage () {
    const [todoValue, setTodoValue] = useState('')
    const dispatch = useDispatch();

    const {todos} = useSelector(state => state.todosReducer)
    return (
       <>
        <input 
        type="text"
        placeholder="todo"
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        />
        <button>add</button>
        {
            todos.length > 0
            ?
            todos.map(todo => <Todo todoInfo={todo} key={todo.id}/>)
            :
            <p>no zadach</p>
        }
        </>
    )
}