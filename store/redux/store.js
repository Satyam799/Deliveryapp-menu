import { configureStore } from "@reduxjs/toolkit";
import Precisious from "./favourates";

const store=configureStore({
    reducer:{
        Favouratemeal:Precisious
    }
})

export default store