import { createSlice } from "@reduxjs/toolkit";

const initialState={ids:[]}


const Precisious =createSlice({

    name:'Precisious',
    initialState,
    reducers:{
        Addfavourate(state,action){
            state.ids=[...state.ids,action.payload]
        },
        Removefavourate(state,action){
            state.ids=state.ids.filter((el)=>el!==action.payload)
        }
    }
})

export const {Addfavourate,Removefavourate}=Precisious.actions

export default Precisious.reducer

