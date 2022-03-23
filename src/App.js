import React, { useState } from 'react'

function App() {
  const [item, setItem] = useState({ items: [], text: "" })

  const handleTextChange = (e) => {
    setItem({ text: e.target.value })
  }

  const handleAddItem = (e) => {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      text: item.text,
      done: false
    }

    setItem((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ""
    }))

    // markItemCompleted(itemId) {
    //   const updatedItems = item.map((elem) => {
    //     if (itemId === item.id) {
    //       item.done = !item.done
    //     }
    //     return elem;
    //   })
    // }
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div>
        <input
          type="text"
          name="item"
          onChange={handleTextChange}
        />
        <button onChange={handleAddItem}>Add</button>
      </div>
      {/* <div>{item.text}</div> */}
    </div>

  );
}

export default App;
