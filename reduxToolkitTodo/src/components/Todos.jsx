import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, setTodoToEdit } from '../features/todo/todoSlice';

const Todos = () => {
  // Iss useSelector method mein hume state ka access milta ha
  const todos = useSelector(state => state.todo.todos); // ye todos variable left hand side mein arrays hold kar rha hai because state.todos mein jo todos le rhe hain todoSlice ke initialState se woh todos ek array hai
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    dispatch(setTodoToEdit(id));
  }

  return (
    <>
      <div className='text-black-500 mx-10 text-4xl font-bold font-mono mt-10 mb-10'>Todo-List</div>
      <ul className='list-none'>
        {todos.map(todo => (
          <li key={todo.id} className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded">
            <div className='text-white mx-10 text-xl font-semibold'>{todo.text}</div>
            <div className="flex space-x-4">
              <button onClick={() => dispatch(handleEdit(todo.id))} className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 3.487c.537-.537 1.407-.537 1.944 0l1.707 1.707c.537.537.537 1.407 0 1.944l-10.4 10.4-4.71 1.177a.75.75 0 01-.92-.92l1.177-4.71 10.4-10.4zM19.872 4.609l-1.707-1.707M6.8 16.8l4.707-4.707"
                  />
                </svg>
              </button>
              <button onClick={() => dispatch(removeTodo(todo.id))} className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos
