import React, { useState } from 'react';

export function Todo() {
    const [InputData, setInputData] = useState('');
    const [items, setItems] = useState([]);
    const [editIndex, setEditIndex] = useState(null); 

    const addItems = () => {
        if (!InputData.trim()) return;

        if (editIndex !== null) {
            
            const updatedItems = [...items];
            updatedItems[editIndex] = InputData;
            setItems(updatedItems);
            setEditIndex(null); 
        } else {
            
            setItems([...items, InputData]);
        }

        setInputData('');
    };

    const deleteItems = (id) => {
        const updatedItems = items.filter((_, ind) => ind !== id);
        setItems(updatedItems);
    };

    const updateItem = (id) => {
        setInputData(items[id]); 
        setEditIndex(id); 
    };

    const RemoveAll = () => {
        setItems([]); 
    };

    return (
        <div className='container'>
            <h1>Todo List</h1>
            <div className='searchbar'>
                <input
                    type="text"
                    placeholder='Enter anything to add'
                    value={InputData}
                    onChange={(e) => setInputData(e.target.value)}
                />
                <button onClick={addItems}>
                    {editIndex !== null ? 'Update' : 'Add Todo'}
                </button>
            </div>
            <div className='show'>
                {items.map((elem, ind) => (
                    <div className='eachitems' key={ind}>
                        <h2>{elem}</h2>
                        <button id="edit" onClick={() => updateItem(ind)}>Edit</button>
                        <button onClick={() => deleteItems(ind)}>Delete</button>
                    </div>
                ))}
            </div>
            {items.length > 0 && <button onClick={RemoveAll} className='btn'>Remove All</button>}
        </div>
    );
}

export default Todo;

