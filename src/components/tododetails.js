import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const Details = () => {
  const { id } = useParams();
  const [todos, setTodos] = useState([]);
  const [todoSelected, setTodoSelected] = useState(null);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      const parsedTodos = JSON.parse(storedTodos);
      setTodos(parsedTodos);

      const selectedIndex = parseInt(id) - 1;
      const selectedTodo = parsedTodos[selectedIndex];
      setTodoSelected(selectedTodo);
    }
  }, [id]);

  const back = () => {
    window.location.href = "/";
  }

  return (
    <div>
      {todoSelected ? (
        <div>
          <h1>{todoSelected.title}</h1>
          <p>Description: {todoSelected.description}</p>
          <p>Creation date: {todoSelected.creation}</p>
          <button onClick={back}>BACK TO LIST</button>
        </div>
      ) : (
        <p>Item not found</p>
      )}
    </div>
  );
}

export default Details;

