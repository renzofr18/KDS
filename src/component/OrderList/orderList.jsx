import { useSelector } from "react-redux";
import { OrderItem } from "../OrderItem/orderItem.jsx";
import { FilterList } from "../FilterList/filterList.jsx";
import { useState } from "react";
import { Filter_all, Orders } from "../../Data/data.jsx";
import { DivList, Inputt } from "./oderListStyles.jsx";

export const OrderList = () => {
  const [filterSelected, setFilterSelected] = useState(Filter_all);
  const orders = useSelector((state) => state.orders);
  const [filteredOrders, setFilteredOrders] = useState(Orders);
  const [search, setSearch] = useState("")

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

  const searcher = (e) =>{
  const searchTerm = e.target.value;
  setSearch(searchTerm);
}

/* const filtered = Orders.filter(order => order.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
setFilteredOrders(filtered); */
  return (
    <>
      <FilterList
        filterSelected={filterSelected}
        onFilterChange={handleSelectedFilter}
      />
      <br />
      <div>
      <Inputt  value={search} onChange={searcher} type="text" placeholder="Buscar pedido"/>
        {selectedOrders &&
          selectedOrders.map((order) => (
            <OrderItem key={order.id} order={order} />
          ))}
        {selectedOrders.length === 0 && <DivList>No hay ordenes aquí</DivList>}
      </div>
    </>
  );
};
