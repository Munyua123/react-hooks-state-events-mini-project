import React from "react";

function NewTaskForm(
  {
  handlecategorychange,
  handlechangeform,
  categorys, 
  texts, 
  handleformsubmit,
  categories
}) {
  
  const displayOptions = categories.map(category => {
    return(
      <option
      key={category}
      >
        {category}
      </option>
    )
  })
  return (
    <form 
    onSubmit={handleformsubmit} 
    className="new-task-form">
      <label>
        Details
        <input 
        onChange={handlechangeform} 
        value={texts} 
        type="text" 
        name="text" />
      </label>
      <label>
        Category
        <select 
        onChange={handlecategorychange}
        value={categorys}
        name="category">
          {/* render <option> elements for each category here */}
          {displayOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
