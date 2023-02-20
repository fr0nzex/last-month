import { createSlice } from "@reduxjs/toolkit";


const todosSlice = createSlice({
    name:'todosSlice',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo:(state,action) => {

            let id = 1;

            if(state.todos.length > 0) {
                 id = state.todos[state.todos.length - 1].id + 1
            }

            state.todos = [...state.todos, {id, title: action.payload}]


        }
    }
})

export const {addTodo} = todosSlice.actions;
export default todosSlice.reducer;