import { FlatList, Text, View } from "react-native"
import Mealitem from "../Componet/MealList/Mealitem"
import { CATEGORIES, MEALS } from "../data/dummy-data"
import { useEffect } from "react"
import Mealslist from "../Componet/MealList/Mealslist"

function Mealsoverviewscreen({route,navigation}){


const categoryid=route.params.id
useEffect(function(){
const cetoorry=CATEGORIES.find((el)=>el.id===categoryid)

navigation.setOptions({title:cetoorry.title})
},[categoryid,navigation])


const mealscategory=MEALS.filter((el)=>el.categoryIds.indexOf(categoryid)>=0)
   return  <Mealslist mealscategory={mealscategory} />
}
export default Mealsoverviewscreen