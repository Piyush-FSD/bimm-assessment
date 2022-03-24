import React, { useState } from 'react'
import styled from "styled-components";
import { TodoList } from './TodoList.js';

export const ToDoApp = () => {
    const [item, setItem] = useState({ items: [], text: "" });
    const newItem = {
        id: Date.now(),
        text: item.text,
        done: false
    };

    const handleTextChange = (e) => {
        setItem({ ...item, text: e.target.value })
    };

    const handleAddItem = (e) => {
        e.preventDefault();

        setItem((prevState) => ({
            ...item, items: prevState.items.concat(newItem)
        }));
    };

    const markItemCompleted = (itemId) => {
        const updatedItems = item.items.map((elem) => {
            if (itemId === item.id) {
                item.done = !item.done
            }
            return elem;
        });
        setItem({
            ...item,
            items: [].concat(updatedItems)
        });
    };

    const handleDeleteItem = (itemId) => {
        const updatedItems = item.items.filter((item) => {
            return item.id !== itemId
        });
        setItem({
            ...item,
            items: [].concat(updatedItems)
        });
    };

    return (
        <Container>
            <h1>To Do List</h1>
            <form onSubmit={handleAddItem}>
                <FormContainer>
                    <div>
                        <Input
                            type="text"
                            value={item.text}
                            onChange={handleTextChange}>
                        </Input>
                    </div>
                    <div>
                        <AddButton disabled={!item.text}>
                            Add# {item.items.length + 1}
                        </AddButton>
                    </div>
                </FormContainer>
            </form>
            <div>
                <TodoList
                    items={item.items}
                    onItemCompleted={markItemCompleted}
                    onDeleteItem={handleDeleteItem}
                />
            </div>
        </Container>
    )
};

const Container = styled.div`
width: 500px;
height: 300px;
border: 3px solid lightblue;
text-align: center;
`

const FormContainer = styled.div`
display: flex;
justify-content: center;
`

const Input = styled.input`
height: 40px;
border-radius: 15px;
`

const AddButton = styled.button`
color: green;
border-radius: 15px;
height: 40px;
width: 80px;
`
