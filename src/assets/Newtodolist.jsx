import React, { useReducer } from 'react'

    const initialState ={
        inputValue: "",
        tasks: [],
    };
    function reducer(state, action) {
      switch (action.type) {
        case "input":
          return { ...state, inputValue: action.payload };
    
        case "addTask":
          if (state.inputValue.trim() === "") return state;
          const newTask = {
            id: Date.now(),
            text: state.inputValue,
          };
          return {
            ...state,
            tasks: [...state.tasks, newTask],
            inputValue: "",
          };
    
        case "editTask":
          return {
            ...state,
            tasks: state.tasks.map((task) =>
              task.id === action.payload.id
                ? { ...task, text: action.payload.text }
                : task
            ),
          };
    
        case "deleteTask":
          return {
            ...state,
            tasks: state.tasks.filter((task) => task.id !== action.payload),
          };
    
        default:
          return state;
      }
    }
function Newtodolist() {
 
        const [state , dispatch] =useReducer(reducer , initialState);
        const handleedit = (task) => {
          dispatch({ type: "input", payload: task.text });

          dispatch({ type: "deleteTask", payload: task.id });
        };
      
      
        return (
            <>
      <input
        type="text"
        value={state.inputValue}
        onChange={(e) => dispatch({ type: "input", payload: e.target.value })}
      />
      <button onClick={() => dispatch({ type: "addTask" })}disabled={state.inputValue.trim() === ""}
      >Add Task</button>

<ul>
        {state.tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleedit(task)}>Edit</button>
            <button onClick={() => dispatch({ type: "deleteTask", payload: task.id })}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Newtodolist