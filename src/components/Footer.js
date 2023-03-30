import { useDispatch, useSelector } from "react-redux";
import { statusChanged } from "../Redux/Filters/Actions";

export default function Footer() {

    const todo = useSelector((state) => state.todos)

    const dispatch = useDispatch()

    const remainingTodos = todo.filter(todo => !todo.completed).length

    const handleStatus = (status) => {
        dispatch(statusChanged(status))
    }
    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{remainingTodos} tasks left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li className="cursor-pointer font-bold"
                    onClick={() => handleStatus('All')}
                >
                    All
                </li>
                <li>|</li>
                <li className="cursor-pointer"
                    onClick={() => handleStatus('Incomplete')}

                >Incomplete</li>
                <li>|</li>
                <li className="cursor-pointer"
                    onClick={() => handleStatus('Completed')}
                >
                    Complete
                </li>
                <li></li>
                <li></li>
                <li className="h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500"></li>
                <li className="h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer"></li>
                <li className="h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer"></li>
            </ul>
        </div>
    );
}
