import { Filter_buttons } from "../../Data/data";
import { Inputt, Ul, Li, DivList } from "./filterListStyles";

export const FilterList = ({ onFilterChange }) => {
  return (
    <DivList>
      <Ul>
        {Object.entries(Filter_buttons).map(
          ([key, { label, value }], index) => {
            return (
              <>
                <Li
                  onClick={() => {
                    onFilterChange(value);
                  }}
                >
                  {label}
                </Li>
                {Object.entries(Filter_buttons).length - 1 !== index && (
                  <Li>|</Li>
                )}
              </>
            );
          }
        )}
      </Ul>
      <Inputt type="text" placeholder="Buscar pedido"/>
    </DivList>
  );
};
