import React from "react";
import { useState } from "react";

function CategoryFilter({categories}) {
  const [selectedCategory, setSelectedCategory] = useState("")
  function HandleClassName(item) {
    console.log("works")
    if(selectedCategory === item) {
      setSelectedCategory("")
    }
    else{
      setSelectedCategory(item)
  }
  }
 
  const displayCategories = categories.map(item => {
    return(
      <button
      key={item}
      className={selectedCategory === item ? "selected" : ""}
      onClick={() => HandleClassName(item)}
      >  
      {item}
      </button>
    )
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {displayCategories}
    </div>
  );
}

export default CategoryFilter;
