import React, {useEffect, useState} from "react";
import axios from "axios";
import {findAllByDisplayValue} from "@testing-library/react";

const editModals = ({handleSave, idTodo, url, setOpen}) => {
    const [todo, setTodo] = useState({})

    useEffect(() => {
        axios.put(`${url}/{idTodo}`)
            .then(({data}) => {
                setTodo(data)
            })
    }, [idTodo])

    const handleEdit = (e) => {
        setTodo({...todo, completed: e.target.chacked, completedAT: new Data()})
    }

    return (
        <div>
            <input
                value={todo.title}
                onChange={(e) => {
                    setTodo({...todo, title: e.target.value})
                }}
                type="text"
            />
            <input
                onChange={handleEdite}
                checked={todo.completed} type="checkbox"/>
            <div>
                <button onClick={() => {
                    handleSave(todo)
                    setOpen(false)
                }}
                >
                    Save
                </button>
                <button onClick={() => setOpen(false)}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default E