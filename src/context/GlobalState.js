import React , {createContext, useReducer} from 'react';
import AppReducer from  './AppReducer';

//Initial state
const initialState = {
    transactions:[]
}

//Create context  apne dusre components ko global state access ho sake iske liye ek provider

export const GlobalContext = createContext(initialState);

//Provider component

export const GlobalProvider = ({children}) => {
   const [state, dispatch] = useReducer(AppReducer,initialState);
   //Actions
 
   function deleteTransaction(id) {
       dispatch({
           type: 'DELETE_TRANSACTION',
           payload: id
       });
   }

   function addTransaction(transaction) {
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    });
}


   return (<GlobalContext.Provider  value = {{
       transactions: state.transactions,
       deleteTransaction,
       addTransaction
   }}>
    {children}
    </GlobalContext.Provider>)
}
