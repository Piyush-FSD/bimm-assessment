import React, { useRef, useState, useEffect } from 'react'
import styled from "styled-components";

export const TodoItem = ({ id, text, completed, markItemCompleted, handleDeleteItem, checkedItems, setCheckedItems }) => {
    const ref = useRef();
    const [cross, setCross] = useState(false)

    const crossItem = () => { setCross(!cross) };
    const crossItemStyling = { textDecoration: cross ? "line-through" : "none" };

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


    // console.log(checkedItems, ' checked items')
    // console.log(checkedItems.length, 'checked items length')

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
                        <ItemText style={crossItemStyling}>
                            {text}
                        </ItemText>
                    </LabelInputContainer>
                    <DeleteButton type="button" onClick={deleteItem}>Delete</DeleteButton>
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
`;

const DeleteButton = styled.button`
background: #fff; 
border-radius: 20px;
border: 2px solid #dd4646;
width: unset;
padding: 2%;
color:#dd4646;
height: 37px;
`;
const LabelInputContainer = styled.div`
display: flex;
`;

const ItemText = styled.div`
margin-left: 10px;
color: #e1982b;
`;