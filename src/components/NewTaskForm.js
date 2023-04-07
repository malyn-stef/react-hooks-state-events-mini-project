import React, { useState } from "react";

function NewTaskForm(props) {
  const [textInput, setTextInput] = useState('')
  const [optionInput, setOptionInput] = useState('Code')

  const newItem = {
    text: textInput,
    category: optionInput
  }
  const renderOptions = props.categories.map((cat) => {

    return <option key={cat} onChange={e => setOptionInput(e)}>{cat}</option>
  })
  function handleSubmit() {

    props.onTaskFormSubmit(newItem)

  }

  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" onChange={e => setTextInput(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category">
          {renderOptions}
        </select>
      </label>
      <input type="submit" value="Add task" onSubmit={(e) => { handleSubmit(); e.preventDefault() }} />
    </form>
  );
}

export default NewTaskForm;
