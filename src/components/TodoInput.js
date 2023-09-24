import React from 'react'
import ToDoList from './ToDoList';

function TodoInput(props) {

  const [setItem , setItemValue] = React.useState("");
  const [addItemValue , addItemfun] = React.useState([]);
  function setValue (event){
      var newValue = event.target.value;
      setItemValue(newValue);
  }
  function addItem (){
      addItemfun((prevValue) =>
         [...prevValue,setItem]
      );
      setItemValue("");
    }

    function deleteItem(id){
      addItemfun((prev )=> prev.filter((item , i) => i!==id));
       }

  return (
    <div>
      <div className="input-container">
        <input type="text" className='input-box' onChange={setValue} placeholder='Enter your task' value={setItem}/>
        <button type="submit" id= "btnn" className="btn btn-dark" onClick={addItem} >Add</button>
      </div>
        <h1 className="container-heading">TODO</h1>
            <hr/>
            {addItemValue.map((item,index) => <ToDoList data = {item} id = {index} key={index} changeFunction={deleteItem}></ToDoList>)}
    </div>
  );
}

export default TodoInput
