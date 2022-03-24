import React from "react";
import { TodoItem } from "./TodoItem.js";

export const TodoList = ({ items, onItemCompleted, onDeleteItem }) => {
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
                            onItemCompleted={onItemCompleted}
                            onDeleteItem={onDeleteItem}
                        />
                    )
                })}
            </ul>
        </div>
    )
};