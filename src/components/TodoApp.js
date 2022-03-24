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
        <Containerwrapper>
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
                                Add #{item.items.length + 1}
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
        </Containerwrapper>
    )
};

const Containerwrapper = styled.div`
text-align: center;
height: 100vh;
`

const Container = styled.div`
border-radius: 60px;
width: 500px;
height: unset;
border: 3px solid lightblue;
text-align: center;
margin: auto 0;
display: inline-block;
box-shadow: 8px 6px #bddce8;
font-size: 20px;
`

const FormContainer = styled.div`
display: flex;
justify-content: space-evenly;
`

const Input = styled.input`
height: 45px;
border-radius: 15px;
width: 280px;
border: 3px solid lightblue;
font-size: 20px;
`

const AddButton = styled.button`
color: #222;
background: lightblue;
border-radius: 20px;
height: 45px;
width: 100px;
box-shadow: 1px 1px 3px 1px #8cb2ee;
font-size: 17px;
`
