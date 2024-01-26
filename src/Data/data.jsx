export const Orders = [
  {
    id: 1,
    name: "Chifa",
    detail: "poco webo",
    status: "Pendiente",
    quantity: 1,
    price: 15.0,
  },

  {
    id: 2,
    name: "Lomo saltado",
    detail: "Poner algo aqui",
    status: "Pendiente",
    quantity: 1,
    price: 20.0,
  },

  {
    id: 3,
    name: "Tallarines verdes",
    detail: "Poner algo aqui",
    status: "Pendiente",
    quantity: 1,
    price: 14.0,
  },

  {
    id: 4,
    name: "Ají de gallina",
    detail: "Poner algo aqui",
    status: "Pendiente",
    quantity: 1,
    price: 16.0,
  },

  {
    id: 5,
    name: "Pallares verdes",
    detail: "Poner algo aqui",
    status: "Pendiente",
    quantity: 1,
    price: 10.0,
  },

  {
    id: 6,
    name: "Arroz con pato",
    detail: "Poner algo aqui",
    status: "Pendiente",
    quantity: 1,
    price: 25.0,
  },
];

export const OrderState = {
  pending: "Pendiente",
  in_process: "En proceso",
  completed: "Completado",
  cancelled: "Cancelado",
};

export const Filter_all = "Todos los pedidos";

export const Filter_buttons = {
  [Filter_all]: {
    label: "Todo",
    value: Filter_all,
  },
  [OrderState.pending]: {
    label: "Pendiente",
    value: OrderState.pending,
  },
  [OrderState.in_process]: {
    label: "En proceso",
    value: OrderState.in_process,
  },
  [OrderState.completed]: {
    label: "Completado",
    value: OrderState.completed,
  },
  [OrderState.cancelled]: {
    label: "Cancelado",
    value: OrderState.cancelled,
  },
};
