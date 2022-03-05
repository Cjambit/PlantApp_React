import React from "react";

function FilterButton(props) {
  return (
    <button type="btn" className="filter" aria-pressed={props.isPressed} onClick={() => props.setFilter(props.name)}>
      <span className="hide">Show </span>
      <span>{props.name} </span>
      <span className="hide"> Invoices</span>
    </button>
  );
}

export default FilterButton;