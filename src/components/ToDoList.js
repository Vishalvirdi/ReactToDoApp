import React from 'react'

function ToDoList(props) {
    return (
        <>
            <ul> {
                <li key= {props.id} onClick={() => (props.changeFunction(props.id))}>{props.data}</li>
            } </ul>
        </>
    );
}

export default ToDoList
