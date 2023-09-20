import { createContext } from 'react'

const CardContext=createContext({
    items:[],
    totalAmount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{

    }

});

export default CardContext;