/*import { createContext, useContext, useState } from "react";



const Favouratecontext=createContext()

function Favourateprovider({children}){

    const [favourateid,setfavourateid]=useState([])

    function Addfavurate(item){
        setfavourateid((favouratitem)=>[...favouratitem,item])
    }
    function Removefavourate(id){
        setfavourateid(favourateid.filter((elementid)=>elementid !== id))
    }

    return <Favouratecontext.Provider value={{favourateid,Addfavurate,Removefavourate}}>{children}</Favouratecontext.Provider>
} 

function Upppost(){
   const  context=useContext(Favouratecontext)

   return context
} 

export {Upppost,Favourateprovider}*/