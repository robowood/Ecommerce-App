import { useReducer } from 'react';

import cartContext from './Context'
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(
      
      defaultCartState
    );
  
    const addItemToCartHandler = (item) => {
      dispatchCartAction({ type: 'ADD', item: item });
    };
  
    const removeItemFromCartHandler = (id) => {
      dispatchCartAction({ type: 'REMOVE', id: id });
    };
  
    const cartContext = {
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      addItem: addItemToCartHandler,
      removeItem: removeItemFromCartHandler,
    };
  
    return (
      <cartContext.Provider value={cartContext}>
        {props.children}
      </cartContext.Provider>
    );
  };
  
  export default CartProvider;
  