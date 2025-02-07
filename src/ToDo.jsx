import { useState } from 'react';
import { Trash2, Plus } from 'lucide-react';
import './ToDoStyles.css';

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false
      };
      setTodos([...todos, newTask]);
      setNewTodo('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-container">
      {/* <h1 className="todo-title">Todo List</h1> */}
      
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new Task..."
          className="todo-input"
        />
        <button
          type="button"
          onClick={addTodo}
          className="add-button"
        >
          <Plus size={20} />
        </button>
      </form>

      <div className="todo-list">
        {todos.map(todo => (
          <div key={todo.id} className="todo-item">
            <input
              type="checkbox"
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="todo-checkbox"
            />
            <label
              htmlFor={`todo-${todo.id}`}
              className={`todo-text ${todo.completed ? 'completed' : ''}`}
            >
              {todo.text}
            </label>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="delete-button"
              aria-label="Delete todo"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>
      
      {todos.length === 0 && (
        <p className="empty-message">
          No tasks yet. Add one above!
        </p>
      )}
    </div>
  );
};

export default ToDo;
