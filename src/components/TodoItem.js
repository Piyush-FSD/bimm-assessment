import React, { useRef, useState, useEffect } from 'react'
import styled from "styled-components";

export const TodoItem = ({ id, text, completed, onItemCompleted, onDeleteItem }) => {
    const ref = useRef();
    const [cross, setCross] = useState(false)
    const [checkedItem, setCheckedItem] = useState([])

    const crossItem = () => { setCross(!cross) };
    const crossStyling = { textDecoration: cross ? "line-through" : "none" };

    const markCompleted = (e) => {
        const isChecked = e.target.checked;

        if (isChecked) {
            checkedItem.push(id)
        } else {
            const index = checkedItem.indexOf(id)
            checkedItem.splice(index, 1)
        }

        onItemCompleted(id)
    };

    console.log(checkedItem, ' checked item')

    const deleteCheckedItems = () => {
        // checkedItem.map((elem, index) => {
        //     if ()
        // })
    }

    const deleteItem = () => { onDeleteItem(id) };


    // useEffect(() => {
    //     if (listItem) {

    //     }

    //     setTimeout(() => {

    //     }, 500, listItem)
    // })

    return (
        <div>
            <div>
                {/* {completed ? "done" : "undone"} */}
                <ListItem onClick={crossItem}>
                    {/*li ref={(li) => (listItem = li)}*/}
                    <LabelInputContainer>
                        <div>
                            <input
                                type="checkbox"
                                onChange={markCompleted}
                            />
                        </div>
                        <ItemText style={crossStyling}>
                            {text}
                        </ItemText>
                    </LabelInputContainer>
                    <DeleteButton type="button" onClick={deleteItem}>x</DeleteButton>
                </ListItem>
            </div>
            {checkedItem.length > 0 ? <button onClick={deleteCheckedItems}>delete</button> : null}
        </div>
    )
};

const ListItem = styled.div`
display: flex;
justify-content: space-between;
padding: 2vh;
margin: 20px 30px 20px 0;
background: rgb(174 219 255 / 63%);
border: 1px solid #333;
border-radius: 20px;
`;

const DeleteButton = styled.button`
background: lightblue; 
border-radius: 10px;
width: 35px;
height: 30px;
`;
const LabelInputContainer = styled.div`
display: flex;
`;

const ItemText = styled.div`
margin-left: 10px;
`;