import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './style.css';
import Items from '..components/todoitems';

function List() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
}
}, []);

return (
    <div>
    <h1>TODO LIST</h1>
    <div className={'lists'}>
        {todos.map((todo, index) => (
        <Item to={`/details/${index+1}`} title={todo.title} />
        ))}
    </div>

    <div className={'button'}> <Link to={'/add'}> <button>NEW TODO</button> </Link> </div>
    </div>
);
}

export default List;