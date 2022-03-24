import React, { useRef, useEffect } from 'react'


export const TodoItem = ({ id, text, completed, onItemCompleted, onDeleteItem, ch }) => {
    const ref = useRef();

    const markCompleted = () => {
        onItemCompleted(id)
    }

    const deleteItem = () => {
        onDeleteItem(id)
    }

    // useEffect(() => {
    //     if (listItem) {

    //     }

    //     setTimeout(() => {

    //     }, 500, listItem)
    // })

    return (
        <div>
            {/* {completed ? "done" : "undone"} */}
            <li>
                {/*li ref={(li) => (listItem = li)}*/}
                <label>
                    <input
                        type="checkbox"
                        checked={ch}
                        onChange={markCompleted}
                    />
                    {text}
                </label>
                <button type="button" onClick={deleteItem}>x</button>
            </li>
        </div>
    )
}