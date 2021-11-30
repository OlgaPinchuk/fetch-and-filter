// NPM packages
import { useState } from "react";

// Project files
import Checkbox from "./shared/Checkbox";

export default function Filter({ options, onSelect }) {
  // Local state
  const [isOpen, setIsOpen] = useState(false);

  // Methods
  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  // Components
  const FilterItem =
    options &&
    options.map((item) => {
      return (
        <li key={item.id}>
          <label>
            <Checkbox
              onChange={onSelect}
              id={item.id}
              name={item.label}
              value={item.value}
              checked={item.selected}
            />
            {item.label}
          </label>
        </li>
      );
    });

  return (
    <div className="filter-block">
      <button className="filter-button" onClick={toggleOpen}>
        Filter by films
      </button>
      {isOpen && <ul className="filter-options grid-cards">{FilterItem}</ul>}
    </div>
  );
}
