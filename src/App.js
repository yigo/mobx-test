import React from 'react';
import { Provider, initState } from './store/StoreProvider';
import TodoList from './component/ToDo/TodoList';
import TodoForm from './component/ToDo/TodoForm';

function App() {
  return (
    <Provider value={initState}>
      <div>
        <TodoList />
        <TodoForm />
      </div>
    </Provider>
  );
}

export default App;
