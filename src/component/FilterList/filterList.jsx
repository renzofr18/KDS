import { Filter_buttons } from "../../Data/data";
import {Ul, Li, Div} from '../../globalStyles';

export const FilterList = ({ onFilterChange }) => {
  return (
    <Div>
      <Ul key={"lista"}>
        {Object.entries(Filter_buttons).map(([key, { label, value }]) => {
          return (
            <>
            <Li
              key={key}
              onClick={() => {
                onFilterChange(value);
              }}
            >
              {label}
            </Li>
            <Li>
              | 
            </Li>
            </>
          );
        })}
      </Ul>
    </Div>
  );
};
