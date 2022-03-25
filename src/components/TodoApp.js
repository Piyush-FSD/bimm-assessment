import React, { useState } from 'react'
import styled from "styled-components";
import { TodoList } from './TodoList.js';

export const ToDoApp = () => {
    const [checkedItems, setCheckedItems] = useState([])
    const [toDo, setToDo] = useState({ items: [], text: "" });
    const newItem = {
        id: Date.now(),
        text: toDo.text,
        done: false
    };

    const handleTextChange = (e) => {
        setToDo({ ...toDo, text: e.target.value })
    };

    const handleAddItem = (e) => {
        e.preventDefault();

        setToDo((prevState) => ({
            ...toDo, items: prevState.items.concat(newItem)
        }));
    };

    const markItemCompleted = (itemId) => {
        const updatedItems = toDo.items.map((elem) => {
            if (itemId === toDo.id) {
                toDo.done = !toDo.done
            }
            return elem;
        });
        setToDo({
            ...toDo,
            items: [].concat(updatedItems)
        });
    };

    const handleDeleteItem = (itemId) => {
        const updatedItems = toDo.items.filter((elem) => {
            return elem.id !== itemId
        });
        setToDo({
            ...toDo,
            items: [].concat(updatedItems),
        });
    };

    const deleteCheckedItems = () => {


    }

    return (
        <ToDoAppWrapper>
            <Container>
                <h1>To Do List</h1>
                <form onSubmit={handleAddItem}>
                    <FormContainer>
                        <div>
                            <Input
                                type="text"
                                value={toDo.text}
                                onChange={handleTextChange}>
                            </Input>
                        </div>
                        <div>
                            <AddButton disabled={!toDo.text}>
                                Add #{toDo.items.length + 1}
                            </AddButton>
                        </div>
                    </FormContainer>
                </form>
                <div>
                    <TodoList
                        items={toDo.items}
                        markItemCompleted={markItemCompleted}
                        handleDeleteItem={handleDeleteItem}
                        checkedItems={checkedItems}
                        setCheckedItems={setCheckedItems}
                    />
                </div>
            </Container>
            <div>
                {checkedItems.length > 0 ? <button onClick={deleteCheckedItems}>delete</button> : null}
            </div>
        </ToDoAppWrapper>
    )
};

const ToDoAppWrapper = styled.div`
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
