import { Filter_buttons } from "../../Data/data";
import {Ul, Li, DivFilter} from './filterListStyles';

export const FilterList = ({ onFilterChange }) => {
  return (
    <DivFilter>
      <Ul key={"lista"}>
        {Object.entries(Filter_buttons).map(([key, { label, value }], index) => {
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
            {Object.entries(Filter_buttons).length - 1 !== index && 
              <Li>
              | 
            </Li>
            }   
            </>
          );
        })}
      </Ul>
    </DivFilter>
  );
};
