import { useState } from "react";
import { useDispatch } from "react-redux";
import tickImage from "../assets/images/double-tick.png";
import noteImage from "../assets/images/notes.png";
import plusImage from "../assets/images/plus.png";
import { added, allCompleted, clearCompleted } from "../Redux/Todos/Action";
import Swal from 'sweetalert2/dist/sweetalert2.js'

export default function Header() {
    const [todoText, setTodoText] = useState('')
    const dispatch = useDispatch()


    const handleSubmit = (event) => {
        event.preventDefault()
        if (todoText === '') {
            return Swal.fire({
                text: 'Please Write Something',
            })
        }
        console.log(todoText);
        dispatch(added(todoText))
        setTodoText('')

    }

    const handleAllComplete = () => {
        dispatch(allCompleted())
    }

    const handleClearComplete = () => {
        dispatch(clearCompleted())
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
                <img src={noteImage} className="w-6 h-6" alt="Add todo" />
                <input
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                    type="text"
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                />
                <button
                    type="submit"
                    className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
                ></button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li onClick={handleAllComplete} className="flex space-x-1 cursor-pointer">
                    <img className="w-4 h-4" src={tickImage} alt="Complete" />
                    <span>Complete All Tasks</span>
                </li>
                <li onClick={handleClearComplete} className="cursor-pointer">Clear completed</li>
            </ul>
        </div>
    );
}
