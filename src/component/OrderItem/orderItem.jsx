import { useDispatch } from 'react-redux';
import {assignStatusInProcess, assignStatusInCompleted, assignStatusInCancelled} from '../Store/orderSlice';
import {DivOrders} from './orderItemStyles';
import {Button} from '../../globalStyles'


export const OrderItem = ({ order, Cancel }) => {
  const dispatch = useDispatch();

  return (
    <DivOrders>
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
    <Button className='In_process' onClick={() => dispatch(assignStatusInProcess(order.id))}>En proceso</Button>
    <Button  className='Cancel' onClick={() => dispatch(assignStatusInCancelled(order.id))}>Cancelado</Button>
  </div>
}

{
  order.status === 'En proceso' &&
  <div>
    <Button  onClick={() => dispatch(assignStatusInCompleted(order.id))}>Completado</Button>
    <Button className={Cancel} onClick={() => dispatch(assignStatusInCancelled(order.id))}>Cancelado</Button>
  </div>
}

    </DivOrders>
  );
};
