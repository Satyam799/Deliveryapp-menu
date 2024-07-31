import { StyleSheet, View ,FlatList } from "react-native"
import Mealitem from "./Mealitem"

export default function Mealslist({mealscategory}){

    function Rendering(item){
        const mealItems={
            id:item.item.id,
            itemsforpreparingmeal:item.item.title,
            Img:item.item.imageUrl,
            affodablity:item.item.affordability.toUpperCase(),
            complexity:item.item.complexity.toUpperCase(),
            duration:item.item.duration,
        }
        return <Mealitem Mealsitem={mealItems} />

    }
    return<View styles={styles.container}> 
    <FlatList data={mealscategory} keyExtractor={(item)=>item.id} renderItem={(item)=> Rendering(item)}/>
    </View>
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})