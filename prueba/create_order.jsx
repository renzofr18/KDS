import Create_plate from './create_plate'
import {Button, Div} from './styles'

const Create_order = () => {
  const description_order = {
    id: 1,
    state: "Pendiente",
  };
  return (
    <Div>
      {description_order.id}
      {Create_plate()}
      {description_order.state}
      <Button>Cancelar</Button>
      <Button>Entregado</Button>
    </Div>
  );
};

export default Create_order;
