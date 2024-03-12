import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TodoCard = styled.div`
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
`;

function TodosList() {
const [todos, setTodos] = useState([]);

    useEffect(() => {
        
    const fetchTodos = async () => {
        
    const fakeTodos = [
        { id: 1, title: 'TODO 1' },
        { id: 2, title: 'TODO 2' },
        { id: 3, title: 'TODO 3' },
    ];
    setTodos(fakeTodos);
    };

    fetchTodos();
}, []);

return (
    <div>
    <h1>TODO LIST</h1>
    {todos.map(todo => (
        <TodoCard key={todo.id}>
        <h3>{todo.title}</h3>
        </TodoCard>
))}
    </div>
);
}

export default TodosList;
