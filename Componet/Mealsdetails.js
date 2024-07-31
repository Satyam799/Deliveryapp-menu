import { StyleSheet, Text, View } from "react-native"

function Mealsdetails({affodablity,complexity,duration,sty}) {
    return  <View style={styles.details}>
<Text style={[styles.detailitems,sty]}>{affodablity}</Text>
<Text style={[styles.detailitems,sty]}>{complexity}</Text>
<Text style={[styles.detailitems,sty]}>{duration} m</Text>
</View>
    
}


const styles=StyleSheet.create({
    details:{
        flexDirection:'row',
        padding:18,
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    detailitems:{
        marginHorizontal:4,
        fontSize:14
       
    },
})
export default Mealsdetails
