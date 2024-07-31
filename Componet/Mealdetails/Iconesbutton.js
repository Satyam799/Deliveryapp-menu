import { Pressable,StyleSheet,Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function Iconsbutton({press,color,icon}){
    return <Pressable onPress={press} style={({pressed})=>pressed && styles.styletext}> 
        <Ionicons name={icon} size={24} color={color}/>
    </Pressable>
}

styles=StyleSheet.create({
    styletext:{
        opacity:0.7
    }
})