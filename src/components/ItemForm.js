import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [newItem, setNewItem] = useState({
    id: '',
    name: '',
    category: 'Produce'
  })

  function handleSubmit(e) {
    e.preventDefault()

    onItemFormSubmit({
      ...newItem,
      id: uuid()
    })
  }

  function handleChangeItem(e) {
    const key = e.target.name
    const value = e.target.value

    setNewItem({
      ...newItem,
      [key]: value
    })
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit} >
      <label>
        Name:
        <input type="text" onChange={handleChangeItem} value={newItem.name} name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleChangeItem} value={newItem.category} name="category" >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
