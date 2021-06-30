import { useState } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { todoRootSelector } from '../../Redux/Todo/todoSelector';
import { loginRoleSelector } from '../../Redux/Login/loginSelector';
import * as action from '../../Redux/Todo/todoAction';
import Navbar from '../../Components/Navbar/Navbar';
import './home.scss';

const HomePage = () => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [idx, setIdx] = useState(0);
  
  const dispatch = useDispatch();

  // Get Todo List
  const todoState = useSelector(todoRootSelector, shallowEqual);
  // Get User Role
  const userRole = useSelector(loginRoleSelector);

  // Create Todo
  const handleAddTodo = () => {
    dispatch(action.addTodo({title, time}));
    setTitle("");
    setTime("")
  };

  // Update Todo
  const handleUpdateTodo = () => {
    dispatch(action.updateTodo({ param: idx, data: {title, time} }));
    setIsUpdate(false);
    setTitle("");
    setTime("");
    setIdx(0);
  };
  
  // Set Data Update
  const handleIsUpdate = ( param, todoTitle, todoTime ) => {
    setIdx(param);
    setTitle(todoTitle);
    setTime(todoTime);
    setIsUpdate(true);
  };

  return (
    <div className="con-home">
      <Navbar />
      <br/><br/><br/>
      <div className="con-todo-form">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Todo Title"
          />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          />
        {!isUpdate ? 
        (<button className="add" onClick={handleAddTodo}>
          Create
        </button>):
        (<button className="update" onClick={handleUpdateTodo}>
          Update
        </button>)}
      </div>
      <div className="con-todo-item">
      {todoState.todo.map((todo, index)=>(
        <div className="todo-item" key={index}>
          <div className="left">
            <p>{todo.time}</p>
            <p>{todo.title}</p>
          </div>
          {userRole === "admin" &&
          (<div className="right">
            <button className="delete" onClick={() => dispatch(action.deleteTodo(index))}>
              delete
            </button>
            <button className="update" onClick={() => handleIsUpdate(index, todo.title, todo.time)}>
              update
            </button>
          </div>)
          }
        </div>
      ))}
      </div>
    </div>
  )
}

export default HomePage;