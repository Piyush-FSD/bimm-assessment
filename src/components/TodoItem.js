import React, { useRef, useState, useEffect } from 'react'
import styled from "styled-components";

export const TodoItem = ({ id, text, completed, onItemCompleted, onDeleteItem, ch }) => {
    const ref = useRef();
    const [cross, setCross] = useState(false)

    const crossItem = () => {
        setCross(!cross)
    }

    const crossStyling = {
        textDecoration: cross ? "line-through" : "none",
    };

    const markCompleted = () => {
        onItemCompleted(id)
    }

    const deleteItem = () => {
        onDeleteItem(id)
    }

    // useEffect(() => {
    //     if (listItem) {

    //     }

    //     setTimeout(() => {

    //     }, 500, listItem)
    // })

    return (
        <div>
            {/* {completed ? "done" : "undone"} */}
            <ListItem onClick={crossItem}>
                {/*li ref={(li) => (listItem = li)}*/}
                <LabelInputContainer>
                    <div>
                        <input
                            type="checkbox"
                            checked={ch}
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
    )
}

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