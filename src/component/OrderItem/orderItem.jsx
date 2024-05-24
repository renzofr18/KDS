import { useDispatch } from 'react-redux';
import {assignStatusInProcess, assignStatusInCompleted, assignStatusInCancelled} from '../Store/orderSlice';
import {DivOrders, ButtonCancel, ButtonComplete} from './orderItemStyles';
import {Button} from '../../globalStyles'
import {status} from '../../Data/status'



export const OrderItem = ({ order }) => {
  const dispatch = useDispatch();

  
  return (
    <DivOrders style={{backgroundColor:status[order.status].color}}>
      <div>
        <h2>{order.name}</h2>
          <p style={{height: '19px'}}>{order.detail}</p>
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
    <ButtonCancel  className='Cancel' onClick={() => dispatch(assignStatusInCancelled(order.id))}>Cancelado</ButtonCancel>
  </div>
}

{
  order.status === 'En proceso' &&
  <div>
    <ButtonComplete  onClick={() => dispatch(assignStatusInCompleted(order.id))}>Completado</ButtonComplete>
    <ButtonCancel  onClick={() => dispatch(assignStatusInCancelled(order.id))}>Cancelado</ButtonCancel>
  </div>
}
    </DivOrders>
  );
};
