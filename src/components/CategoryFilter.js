import React from "react"

function CategoryFilter({ categories, onNewCategories }) {

  const catMap = categories.map((cat) => {
    return (<button key={cat} onClick={e => { onNewCategories(cat); handleClick(e) }}>{cat}</button>)
  })

  function handleClick(e) {
    if (e.target.className !== 'selected') { e.target.className = 'selected' }
    else { e.target.className = '' }

  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {catMap}
    </div>
  );
}

export default CategoryFilter;
