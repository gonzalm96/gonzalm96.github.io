import { useState } from "react";

function Todo(props){
    const [isOpen, setOpen] = useState(false);
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState("");
    const [isCompleted, setCompleted] = useState(false);
    

    function checkOpen() {
      if(isOpen){
        setOpen(false);
      }else{
        setOpen(true);
      }
    }

    function handleChange(e) {
        setNewName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.editTask(props.id, newName);
        setNewName("");
        setEditing(false);
    }

    const editingTemplate = (      
      <form className="stack-small" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="todo-label" htmlFor={props.id}>
            New name for {props.name}
          </label>
          <input id={props.id} className="todo-text" type="text" onChange={handleChange}/>
        </div>
        <div className="btn-group">
          <button type="button" className="btn todo-cancel" onClick={() => setEditing(false)}>
            Cancel
            <span className="visually-hidden">renaming {props.name}</span>
          </button>
          <button type="submit" className="btn btn__primary todo-edit">
            Save
            <span className="visually-hidden">new name for {props.name}</span>
          </button>
        </div>
      </form>      
    );

    const viewTemplate = (
      <div className="stack-small">
        Completed: 
          <input
            id={props.id}
            type="checkbox"
            defaultChecked={props.completed}
            onChange={() => 
                props.toggleTaskCompleted(props.id)
            }
          />
        <div className="btn-group">
          <button type="button" className="btn" onClick={() => setEditing(true)}>
            Edit <span className="visually-hidden">{props.name}</span>
          </button>
          <button
            type="button"
            className="btn btn__danger"
            onClick={() => props.deleteTask(props.id)}>
            Delete <span className="visually-hidden">{props.name}</span>
          </button>
        </div>
      </div>
    );

    return(
      <li className={ isOpen ? 'todo open stack-small':'todo closed stack-small'}>
        <button className="c-cb todo-heading" onClick={checkOpen}>
          <span className="todo-name">{props.name}</span>
          <label className="todo-label" htmlFor={props.id}>
            { props.completed ? 'Completed':'Active'}
          </label>
        </button>
        <div className={ isOpen ? 'openItem':'closedItem'}>
          {isEditing ? editingTemplate:viewTemplate }
        </div>
      </li>
    );
}

export default Todo;