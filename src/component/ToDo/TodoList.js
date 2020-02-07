import React from 'react'
import { useObserver } from 'mobx-react';
import { useStore } from '../../store/StoreProvider';

export default function TodoList() {
    const { todo } = useStore()
    return useObserver(() => (
        <ul>
            {todo.list.map((item) => <li>{item.title}</li>)}
        </ul>
    ))
}
