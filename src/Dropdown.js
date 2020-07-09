import React, { useState } from 'react';

function Dropdown ({ title, items, multiselect = false }) {
  const [open, setOpen] = useState(false);
  /* const [selection, setSelection] = useState([]); */
  const toggle = () => setOpen(!open);
/*
  function handleClick(item) {
  }
 */
  return (
    <div className="dd-wrapper">
      <div
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}>
          <div className="dd-header_title">
            <p className="dd-header_title--bold">{title}</p>
          </div>
      </div>
    </div>
  )
}

export default Dropdown