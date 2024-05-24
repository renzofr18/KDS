import { createSlice } from '@reduxjs/toolkit';
import { Orders, OrderState } from '../../Data/data';

const initialState = Orders;

export const orderSlice = createSlice({
  name: 'Ordenes', //nombre del slice
  initialState, //valor inicial del slice definido antes
  reducers: { //define los reductores los cuales actualizan el estado segun las acciones

    assignStatusInProcess: (state, action) => {
      const order = state.find((order) => order.id === action.payload);
      if (order) {
        order.status = OrderState.in_process;
      }
    },

    assignStatusInCompleted: (state, action) => {
      const order = state.find((order) => order.id === action.payload);
      if (order) {
        order.status = OrderState.completed;
      }
    },

    assignStatusInCancelled: (state, action) => {
      const order = state.find((order) => order.id === action.payload);
      if (order) {
        order.status = OrderState.cancelled;
      }
    },
  },
});

export const { addOrder, assignStatusInProcess, assignStatusInCompleted, assignStatusInCancelled } = orderSlice.actions;

export default orderSlice.reducer;
