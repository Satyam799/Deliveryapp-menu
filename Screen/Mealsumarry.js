import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { MEALS } from "../data/dummy-data"
import Mealsdetails from "../Componet/Mealsdetails"
import Subtitle from "../Componet/Mealdetails/Subtitle"
import List from "../Componet/Mealdetails/List"
import { useEffect } from "react"
import Iconsbutton from "../Componet/Mealdetails/Iconesbutton"
//import { Upppost } from "../store/context/favouratecontext"
import { useDispatch, useSelector } from "react-redux"
import { Addfavourate, Removefavourate} from "../store/redux/favourates"


function Mealsummarys({route,navigation}){
const dispatch=useDispatch()
const catid=route.params.id
const selectedmeal=MEALS.find((el)=>el.id===catid)
//const {favourateid,Removefavourate,Addfavurate}=Upppost()
//const mealfavourte=favourateid.find((el)=>el===catid)
const Mealfavourte=useSelector((state)=>state.Favouratemeal.ids).includes(catid)
console.log(Mealfavourte)
function handelpress(){
    if(Mealfavourte){
        dispatch(Removefavourate(catid))

        //Removefavourate(catid)
    }else{
        //Addfavurate(catid)
        dispatch(Addfavourate(catid))

    }
}


    useEffect(function(){
        navigation.setOptions({
            headerRight:()=>{
              return  <Iconsbutton press={handelpress} icon={Mealfavourte?"star":"star-outline"} color={"white"}/>
            }
        })
    
    },[navigation , handelpress])







return <ScrollView style={styles.scrolemargin}>
    <Image source={{uri:selectedmeal.imageUrl}} style={styles.Imageheight}/>
    <Text style={styles.styletitle}>{selectedmeal.title}</Text>
    <Mealsdetails sty={styles.textstyle} affodablity={selectedmeal.affordability.toUpperCase()} complexity={selectedmeal.complexity.toUpperCase()} duration={selectedmeal.duration}/>
    <View style={styles.containercentering}>
    <View style={styles.containerwidth}>
    <Subtitle>ingredients</Subtitle>
    <List data={selectedmeal.ingredients}/>
    <Subtitle>Steps</Subtitle>
    <List data={selectedmeal.steps}/>
    </View>
    </View>

</ScrollView>

}

export default Mealsummarys

const styles=StyleSheet.create({
    Imageheight:{
        height:200,
        width:'100%'
    },
    styletitle:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:24,
        color:'white',
        margin:8
    },
    textstyle:{
        color:'#e2b497'
    },
    containerwidth:{
        width:'80%',
     },
     containercentering:{
        alignItems:'center'
    },
    scrolemargin:{
        marginBottom:32
    }
})