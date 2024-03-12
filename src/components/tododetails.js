import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function TodoDetail() {
    const { id } = useParams();
    const [todo, setTodo] = useState(null);

    useEffect(() => {
    
    const fetchTodoById = async () => {

    const fakeTodo = { id: id, title: 'Todo1', description: 'Todo de la clase1', createdAt: '2024-03-12' };
    setTodo(fakeTodo);
    };

    fetchTodoById();
    }, 
    [id]);

    if (!todo) {
    return <div>Loading...</div>;
    }

    return (
        <div>
        <h1>TODO DETAILS</h1>
        <h3>Title: {todo.title}</h3>
        <p>Todo creation time: {todo.createdAt}</p>
        <p>Description: {todo.description}</p>
    </div>
);
}

export default TodoDetail;
