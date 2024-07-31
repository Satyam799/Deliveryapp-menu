import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Gridtile from "../Componet/Gridtile";
import Mealsoverviewscreen from "./Mealsoverviewscreen";

function Categoryooo({navigation}){

function Nav(item){
navigation.navigate('MealsOverview',{id:item.item.id})
}

    return <FlatList 
    data={CATEGORIES} 
    renderItem={(item)=><Gridtile title={item.item.title} color={item.item.color} press={()=>Nav(item)}/>} 
    keyExtractor={(item)=>item.id}
    numColumns={2}
    />
}

export default Categoryooo