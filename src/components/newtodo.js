import { useEffect, useState } from "react";
import './style.css';

const New = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [creation, setCreation] = useState("");
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos)
        {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const newTodo = { title, description, creation };
        const updatedTodos = [...todos, newTodo];
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    
        setTitle("");
        setDescription("");
        setCreation("");

        setTodos(updatedTodos);

        window.location.href = "/";
        };

return (
    <div>
        <form className={"form-to-do"} onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <label>Description</label>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <label>Creation Date</label>
            <input type="date" value={creation} onChange={(e) => setCreation(e.target.value)}/>
            </form>
            <button type="submit" >SEND</button>
        </div>
    )
}

export default New;
