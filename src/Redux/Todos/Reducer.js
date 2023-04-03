/* eslint-disable no-undef */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import initialState from "../Todos/InitialState";
import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLOURSELECTED, DELETED, TOGGLED } from "./ActionTypes";


const maxTodoId = (todos) => {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), - 1)
    return maxId + 1
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: maxTodoId(state),
                    text: action.payload
                }
            ]

        case TOGGLED:

            return state.map(todo => {
                if (todo.id !== action.payload) {
                    return todo
                }
                return {
                    ...todo,
                    completed: !todo.completed,
                }
            })

        case COLOURSELECTED:

            return state.map(todo => {
                const { color, todoId } = action.payload
                if (todo.id !== todoId) {
                    return todo
                }
                return {
                    ...todo,
                    color: color
                }
            })

        case DELETED:

            return state.filter(todo => todo.id !== action.payload)

        case ALLCOMPLETED:

            return state.map(todo => {
                return {
                    ...todo,
                    completed: true,
                }
            })

        case CLEARCOMPLETED:

            return state.filter(todo => !todo.completed)



        default:
            return state;
    }
}

export default Reducer