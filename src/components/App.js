import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

// for this i passed the TASKS data directly to the tasklist component where it will e passed to the 
// tasks component that will hold the data

function App() {
const [newText, setNewText] = useState("")
const [newCategory, setNewDetails] = useState("")
function HandleTextChange(e) {
  setNewText(e.target.value)
}
function HandleCategoryChange(e) {
  setNewDetails(e.target.value)
}
function HandleFormSubmit(e) {
 e.preventDefault()
 displayForm()

}
function displayForm() {
const formData = {
  text: newText,
  category: newCategory
}
console.log(formData)
}
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES} 
      />
      <NewTaskForm 
      categorys={newCategory} 
      texts={newText} 
      categories={CATEGORIES}
      handlecategorychange={HandleCategoryChange}
      handlechangeform={HandleTextChange}
      handleformsubmit={HandleFormSubmit} 
      />
      <TaskList
      tasks={TASKS}
      />
    </div>
  );
}

export default App;
