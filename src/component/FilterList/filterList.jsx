import { useState } from "react";
import { Filter_buttons, Orders } from "../../Data/data";
import { Ul, Li, DivList } from "./filterListStyles";

export const FilterList = ({ onFilterChange }) => {
  return (
    <DivList>
      <Ul key={"filtro"}>
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
                </Li >
                {Object.entries(Filter_buttons).length - 1 !== index && (
                  <Li>|</Li>
                )}
              </>
            );
          }
        )}
      </Ul>
    </DivList>
  );
};
