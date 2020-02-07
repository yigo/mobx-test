import React from 'react';
import ToDoStore from './ToDoStore';

const StoreContext = React.createContext();
const { Provider } = StoreContext;

function useStore() {
    const store = React.useContext(StoreContext);
    if(!store) {
        throw new Error('Cannot use `useStore` outside a StoreProvider');
    }
    return store
}

const initState = {
    todo: ToDoStore,
} 

export { Provider, useStore, initState }
