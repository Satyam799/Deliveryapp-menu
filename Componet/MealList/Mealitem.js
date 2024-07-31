import { Image, Pressable, StyleSheet, Text, View ,Platform } from "react-native";

import {useNavigation} from '@react-navigation/native'
import Mealsdetails from "../Mealsdetails";

export default function Mealitem({Mealsitem,press}){
const {    id,itemsforpreparingmeal,Img,affodablity, complexity, duration,}=Mealsitem
const navigation = useNavigation()
function press(){
    navigation.navigate('Mealsummary',{id:id})
}



return <Pressable style={({pressed})=>[styles.constainer,pressed? styles.ioseffect:null ]} 
android_ripple={{color:'#ccc'}} onPress={press}>
<View style={styles.innercontainer}>

<View>
<Image style={styles.Styleimage} source={{uri:Img}}/>
<Text style={styles.styletext}>
{itemsforpreparingmeal}
</Text>
<Mealsdetails affodablity={affodablity} complexity={complexity} duration={duration}/>
</View>
</View>
</Pressable>
}

const styles=StyleSheet.create({

    constainer:{
        margin:24,
        borderRadius:8,
        overflow:Platform.select({ios:'visible',android:'hidden'}),
        backgroundColor:'white',
        elevation:4,
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.25,
        shadowRadius:8,
        backgroundColor:'white',
    },
    innercontainer:{
        overflow:'hidden',
        borderRadius:16
    },

    Styleimage:{
        width:'100%',
        height:200
    },
    styletext:{
    fontWeight:'bold',
    textAlign:'center',
    fontSize:18,
    margin:8
    },
    
    ioseffect:{
        opacity:0.5
    }

})