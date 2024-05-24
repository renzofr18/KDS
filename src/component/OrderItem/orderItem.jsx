import { useDispatch } from 'react-redux';
import {assignStatusInProcess, assignStatusInCompleted, assignStatusInCancelled} from '../Store/orderSlice';
import {DivOrders, ButtonCancel, ButtonComplete} from './orderItemStyles';
import {Button} from '../../globalStyles'
import {status} from '../../Data/status'
import { useEffect, useRef, useState } from 'react';

export const OrderItem = ({ order }) => {

  
  const dispatch = useDispatch();

  const [seconds ,setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const timeRef = useRef(null)
   
  useEffect(()=>{
    timeRef.current= setInterval(()=>{
      setSeconds(PrevSeconds=>{
        if(PrevSeconds==59){
          setMinutes(prevMinutes => prevMinutes +1);
          return 0;
        }else{
          return PrevSeconds +1
        }
      });
    },1000)

    return()=>clearInterval(timeRef.current);
  }, [])

const ChangeComplete = () => {dispatch(assignStatusInCompleted(order.id))}
 const ChangeCancel = () => {dispatch(assignStatusInCancelled(order.id))}
 const stopTimer = () => {
   clearInterval(timeRef.current);
 }

  const handleClickCancel = () => {
    ChangeCancel();
    stopTimer();
 };

 const handleClickComplete = () => {
  ChangeComplete();
  stopTimer();
};



  return (
    <DivOrders style={{backgroundColor:status[order.status].color}}>
      <div>
        <h2>{order.name}</h2>
          <p style={{height: '19px'}}>{order.detail}</p>
          <p>{order.quantity}</p>
          <p>{order.price + '.00'}</p>
          <p>{order.status}</p>
          <p>{minutes}:{seconds}</p>
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
    <ButtonCancel  className='Cancel' onClick={handleClickCancel}>Cancelado</ButtonCancel>
  </div>
}

{
  order.status === 'En proceso' &&
  <div>
    <ButtonComplete  onClick={handleClickComplete}>Completado</ButtonComplete>
    <ButtonCancel  onClick={handleClickCancel}>Cancelado</ButtonCancel>
  </div>
}
    </DivOrders>
  );
};
