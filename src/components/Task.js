import React from "react";

function Task({text, category, handledelete}) {
  return (
    <div className="task">
      <div className="label">{category}</div>

      <div className="text">{text}</div>
      <button 
      onClick={handledelete}
       className="delete"
       >X</button>
    </div>
  );
}

export default Task;
