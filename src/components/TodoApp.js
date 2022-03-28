import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { TodoList } from './TodoList.js';

export const ToDoApp = () => {
    const [checkedItems, setCheckedItems] = useState([])
    const [storageToDo, setStorageToDo] = useState()
    const [toDo, setToDo] = useState({ items: [], text: "" });
    const newItem = {
        id: Date.now(),
        text: toDo.text
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

    useEffect(() => {
        const itemIds = toDo.items.map((elem) => {
            return elem.id;
        });
        localStorage.setItem("todos", JSON.stringify(itemIds))

    }, [toDo.items]);

    const markItemCompleted = (itemId) => {
        const updatedItems = toDo.items.map((elem) => {
            if (itemId === toDo.id) {
                toDo.done = !toDo.done
            };
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
        const filteredItems = toDo.items.filter((item) => !checkedItems.includes(item.id));

        setToDo({
            ...toDo,
            items: filteredItems
        });

        setCheckedItems([]);
    };

    return (
        <ToDoAppWrapper>
            <Container>
                <Header>My Todos</Header>
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
                {checkedItems.length > 0 && <DeleteCheckedBtn onClick={deleteCheckedItems}>Delete Selected</DeleteCheckedBtn>}
            </div>
        </ToDoAppWrapper>
    )
};

const ToDoAppWrapper = styled.div`
text-align: center;
height: unset;
background: #222;
`;

const Container = styled.div`
width: 500px;
height: unset;
text-align: center;
margin: 20px 0;
display: inline-block;
background: #444;
box-shadow: 0px 0px 6px 2px #222;
font-size: 20px;
`;

const Header = styled.h2`
color: white;
`

const FormContainer = styled.div`
display: flex;
justify-content: space-evenly;
border-bottom: 11px solid #222;
padding-bottom: 13px;
`

const Input = styled.input`
height: 30px;
outline: none;
border-radius: 15px;
width: 280px;
border: 2px solid #e1982b;
font-size: 20px;
box-shadow: 0px 0px 3px 3px #222;
padding-left: 5px;
`;

const AddButton = styled.button`
color: #fff;
background: #e1982b;
border-radius: 20px;
height: 35px;
width: 100px;
border: 2px solid #222;
font-size: 15px;
box-shadow: 1px 1px 3px 1px #222;
`;

const DeleteCheckedBtn = styled.button`
background: #fff; 
border-radius: 20px;
border: 2px solid #dd4646;
width: unset;
padding: 1%;
color:#dd4646;
`;