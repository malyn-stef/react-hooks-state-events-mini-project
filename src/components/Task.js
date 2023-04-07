import React from "react";

function Task({ text, category }) {


  return (
    <div className="task">
      <div className="label" >{category}</div>
      <div className="text" id={text}>{text}</div>
      <button className="delete" onClick={e => e.target.parentNode.remove()}>X</button>
    </div>
  );
}

export default Task;
