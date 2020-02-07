import React from 'react'
import { useStore } from '../../store/StoreProvider';

export default function TodoForm() {
    const { todo } = useStore();
    const [newItem, setNewItem] = React.useState("");

    const handleOnSubmit = (e) => {
        e.preventDefault();
        todo.add(newItem);
        setNewItem('');
    }

    const handleOnChange = (e) => {
        setNewItem(e.target.value);
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input type="text" value={newItem} onChange={handleOnChange}/>
            <button type='submit'>Add</button>
        </form>
    )
}
