import React, { useReducer, useState } from 'react';

import cartContext from './Context';
import reducerFunction from './Reducer';

const defaultState={
    items:[],
    totalAmount:0
}

const ContextProvider = (props) => {

    const [cartState,dispatchAction]=useReducer(reducerFunction,defaultState);
    const [token,setToken]=useState(null);

    const addToCartHandler =(item)=>{
        dispatchAction({type:'ADD',item:item})
    };

    const removeFromCartHandler=(id)=>{
        dispatchAction({type:'REMOVE',id:id})
    }
    const loginHandler =(token)=>{
        setToken(token)
    };

    const logoutHandler =()=>{
        setToken(null);
    }

    const userIsLoggedIn=!!token;



    const ContextValue={
        items:cartState.items,
        totalAmount:cartState.tatalAmount,
        addToCart:addToCartHandler,
        removeFromCart:removeFromCartHandler,
        token:token,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler

    }

  return (
    <cartContext.Provider value={ContextValue}>
        {props.children}
    </cartContext.Provider>
  )
}

export default ContextProvider;
 