import React from "react";
import { TodoItem } from "./TodoItem.js";

export const TodoList = ({ items, markItemCompleted, handleDeleteItem, checkedItems, setCheckedItems }) => {
    return (
        <div>
            <ul>
                {items.map((elem) => {
                    return (
                        <TodoItem
                            key={elem.id}
                            id={elem.id}
                            text={elem.text}
                            completed={elem.done}
                            markItemCompleted={markItemCompleted}
                            handleDeleteItem={handleDeleteItem}
                            checkedItems={checkedItems}
                            setCheckedItems={setCheckedItems}
                        />
                    )
                })}
            </ul>
        </div>
    )
};