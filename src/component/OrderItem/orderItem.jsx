import { useDispatch } from 'react-redux';
import {assignStatusInProcess, assignStatusInCompleted, assignStatusInCancelled} from '../Store/orderSlice'

export const OrderItem = ({ order }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h2>{order.name}</h2>
          <p>{order.detail}</p>
          <p>{order.quantity}</p>
          <p>{order.price + '.00'}</p>
          <p>{order.status}</p>
      </div>
      {
  order.products?.map((product) => (
    <div key={product.id}>
        <h2>{product.name}</h2>
    </div>
  ))
}

{
  order.status === 'Pendiente' &&
  <div>
    <button onClick={() => dispatch(assignStatusInProcess(order.id))}>En proceso</button>
    <button  onClick={() => dispatch(assignStatusInCancelled(order.id))}>Cancelado</button>
  </div>
}

{
  order.status === 'En proceso' &&
  <div>
    <button  onClick={() => dispatch(assignStatusInCompleted(order.id))}>Completado</button>
    <button onClick={() => dispatch(assignStatusInCancelled(order.id))}>Cancelado</button>
  </div>
}

    </div>
  );
};
