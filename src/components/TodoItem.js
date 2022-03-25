import React, { useRef, useState, useEffect } from 'react'
import styled from "styled-components";

export const TodoItem = ({ id, text, completed, markItemCompleted, handleDeleteItem, checkedItems, setCheckedItems }) => {
    const ref = useRef();
    const [cross, setCross] = useState(false)

    const crossItem = () => { setCross(!cross) };
    const crossStyling = { textDecoration: cross ? "line-through" : "none" };

    const handleItemChecked = (e) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            setCheckedItems([...checkedItems, id])
        } else {
            const checkedItemCopy = [...checkedItems]
            const index = checkedItemCopy.indexOf(id)
            checkedItemCopy.splice(index, 1)
            setCheckedItems(checkedItemCopy)
        };

        markItemCompleted(id);
    };

    console.log(checkedItems.length)

    const deleteItem = () => { handleDeleteItem(id) };


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
                                onChange={handleItemChecked}
                            />
                        </div>
                        <ItemText style={crossStyling}>
                            {text}
                        </ItemText>
                    </LabelInputContainer>
                    <DeleteButton type="button" onClick={deleteItem}>x</DeleteButton>
                </ListItem>
            </div>
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