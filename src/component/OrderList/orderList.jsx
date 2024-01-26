import { useSelector } from 'react-redux';
import {OrderItem} from '../OrderItem/orderItem.jsx';
import { FilterList } from '../FilterList/filterList.jsx'
import { useState} from 'react';


export const OrderList = () => {

  const [filterSelected, setFilterSelected] = useState("all");
  const orders = useSelector((state) => state.orders);

  const selectedOrders = filterSelected === "all" ? orders : orders.filter((order) => order.status === filterSelected && order.status !== "all");

  const handleSelectedFilter = (filter) => {
    setFilterSelected(filter);
  };

  return (
    <>
      <FilterList filterSelected={filterSelected} onFilterChange={handleSelectedFilter} />
      <div>
        {
          selectedOrders && selectedOrders.map((order) => (
            <OrderItem key={order.id} order={order} />
          ))
        }
        {
          selectedOrders.length === 0 && <p>No hay ordenes aquí</p>
        }
      </div>
    </>
  );
};
