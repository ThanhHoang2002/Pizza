import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    note: '',
    paymentMethod:'Thanh toán khi nhận hàng',
    time:'',
    state:'Chờ xác nhận',
    client:{},
    staff:{},
    comboInOrders:[],
    pizzaInOrders:[],
    foodInOrders:[],
    total:0,
  },
  reducers: {
    updateOrder: (state, action) => {
        return state = action.payload;
    },
    deleteItemInOrder: (state, action) => {
        const {type,index} = action.payload
        switch (type) {
            case 'pizza':
                state.total = state.total - state.pizzaInOrders[index].priceAtBill*state.pizzaInOrders[index].quantity
                state.pizzaInOrders.splice(index,1)
                break;
            case 'food':
                state.total = state.total - state.foodInOrders[index].priceAtBill*state.foodInOrders[index].quantity
                state.foodInOrders.splice(index,1)
                break;
            case 'combo':
                state.total = state.total - state?.comboInOrders[index].priceAtBill*state.comboInOrders[index].quantity
                state.comboInOrders.splice(index,1)
                break;
            default:
                break;
        }
    },
    changeQuantity: (state, action) => {
        const {type,index,quantity} = action.payload
        switch (type) {
            case 'pizza':
                state.pizzaInOrders[index].quantity = quantity
                state.total = state.total + state.pizzaInOrders[index].priceAtBill*(quantity-state.pizzaInOrders[index].quantity)
                break;
            case 'food':
                state.foodInOrders[index].quantity = quantity
                state.total = state.total + state.foodInOrders[index].priceAtBill*(quantity-state.foodInOrders[index].quantity)
                break;
            case 'combo':
                state.comboInOrders[index].quantity = quantity
                state.total = state.total + state.comboInOrders[index].priceAtBill*(quantity-state.comboInOrders[index].quantity)
                break;
            default:
                break;
        }
    },
  },
});

export const { updateOrder,deleteItemInOrder,changeQuantity } = orderSlice.actions;
export default orderSlice.reducer;