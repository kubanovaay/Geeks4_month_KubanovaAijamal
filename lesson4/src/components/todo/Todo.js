import React, { useState } from 'react';
import classes from './Todo.module.css';


const Todo = ({ todo, handleDelete, handleDone, handleEdit, handleCurrentEdit,isEdit }) => {
    const [ input, setInput ] = useState('');

    return (
        <>
            {
                isEdit &&  <div>
                    <input
                        type="text"
                        value={input}
                        onChange={event => setInput(event.target.value)}
                    />
                    <button onClick={() => {
                        handleEdit({
                            ...todo, title: input
                        });
                    }
                    }>
                        Save
                    </button>
                    <button>
                        Cansel
                    </button>
                </div>
            }


            <li className={classes.todo}>
                <p>id: {todo.id}</p>
                <p>title: {todo.title}</p>
                <button onClick={() => handleCurrentEdit(todo.id)}>
                    Edit
                </button>
                <button onClick={() => handleDone(todo.id)}>
                    Done
                </button>
                <button onClick={() => handleDelete(todo.id)}>
                    Delete
                </button>
            </li>
        </>
    );
};

export default Todo;