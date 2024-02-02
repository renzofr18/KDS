import { useSelector } from "react-redux";
import { OrderItem } from "../OrderItem/orderItem.jsx";
import { FilterList } from "../FilterList/filterList.jsx";
import { useState } from "react";
import { Filter_all } from "../../Data/data.jsx";
import { DivList } from "./oderListStyles.jsx";

export const OrderList = () => {
  const [filterSelected, setFilterSelected] = useState(Filter_all);
  const orders = useSelector((state) => state.orders);

  const selectedOrders =
    filterSelected === Filter_all
      ? orders
      : orders.filter(
          (order) =>
            order.status === filterSelected
        );

  const handleSelectedFilter = (filter) => {
    setFilterSelected(filter);
  };

  return (
    <>
      <FilterList
        filterSelected={filterSelected}
        onFilterChange={handleSelectedFilter}
      />
      <br />
      <div>
        {selectedOrders &&
          selectedOrders.map((order) => (
            <OrderItem key={order.id} order={order} />
          ))}
        {selectedOrders.length === 0 && <DivList>No hay ordenes aquí</DivList>}
      </div>
    </>
  );
};
