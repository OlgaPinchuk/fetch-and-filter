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
  const FilterItems =
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
      <button
        className="filter-button"
        data-testid="toggle-button"
        onClick={toggleOpen}
      >
        {!isOpen ? "Show" : "Hide"} filter options
      </button>
      {isOpen && <ul className="filter-options grid-cards">{FilterItems}</ul>}
    </div>
  );
}
