import React from "react";
import Task from "./Task";

function TaskList({tasks}) {
function HandleDelete(e) {
  e.preventDefault()
  console.log("Deleted")
}
   const displayTasks = tasks.map(item=> {
    return(
      <Task 
      key={item.id}
      text= {item.text}
      category={item.category}
      handledelete={HandleDelete}
      />
    )
  })
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {displayTasks}
    </div>
  );
}

export default TaskList;
