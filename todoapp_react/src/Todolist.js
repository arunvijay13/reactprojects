import React from "react";
import "./styles.css";

function Todolist(props) {
  const newArray = props.items.map(take => {
    return (
      <div className='list' key={take.key}>
        <p>{take.text}<span className="fa fa-trash"
        onClick={() => props.delete(take.key)}></span></p>
      </div>
    );
  });
  return <div>{newArray}</div>;
}

export default Todolist;
