import { combineReducers } from 'redux'
import todosReducer from './Todos/Reducer'
import filtersReducer from './Filters/Reducer'


const RootReducer = combineReducers({
    todos: todosReducer,
    filters: filtersReducer,
}
)

export default RootReducer