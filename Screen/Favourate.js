import { StyleSheet, Text,View } from "react-native";
import Mealslist from "../Componet/MealList/Mealslist";
//import { Upppost } from "../store/context/favouratecontext";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

function Favourate(){

//const {favourateid}=Upppost()
const favourateid=useSelector((state)=>state.Favouratemeal.ids)

const item=MEALS.filter((el)=> favourateid.includes(el.id))
if(item.length===0){
    return <View style={styles.container}>
        <Text style={styles.textstyle}>
            You Have no Item in the Favourate list 
        </Text>
    </View>
}

    return <Mealslist mealscategory={item}/>
}

export default  Favourate

styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    
    },
        textstyle:{
        fontWeight:'bold',
        fontSize:16,
        color:'white',

    }
})