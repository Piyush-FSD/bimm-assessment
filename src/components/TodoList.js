import React from "react";
import styled from "styled-components";
import { TodoItem } from "./TodoItem.js";

export const TodoList = ({ items, markItemCompleted, handleDeleteItem, checkedItems, setCheckedItems }) => {
    return (
        <div>
            <UnorderedList>
                {items.map((elem) => {
                    return (
                        <TodoItem
                            key={elem.id}
                            id={elem.id}
                            text={elem.text}
                            checked={elem.checked}
                            markItemCompleted={markItemCompleted}
                            handleDeleteItem={handleDeleteItem}
                            checkedItems={checkedItems}
                            setCheckedItems={setCheckedItems}
                        />
                    )
                })}
            </UnorderedList>
        </div>
    )
};

const UnorderedList = styled.ul`
margin: 0;
`;