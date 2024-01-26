import { Filter_buttons } from "../../Data/data";

export const FilterList = ({ filterSelected, onFilterChange }) => {
  return (
    <div>
      <ul>
        {Object.entries(Filter_buttons).map(([key, { label, value }]) => {
          return (
            <li
              key={key}
              onClick={() => {
                onFilterChange(value);
              }}
            >
              {label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
