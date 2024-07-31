import { StyleSheet, Text, View } from "react-native";

export default function Subtitle({children}){

    return   <View style={styles.subtitlecontainer}>
    <Text style={styles.subtitle}>{children}</Text>
    </View>
}


styles=StyleSheet.create({
    subtitle:{
        fontSize:18,
        fontWeight:'bold',
        margin:4,
        color:'#e2b497',
        textAlign:'center',
        padding:6,
        
    },
    subtitlecontainer:{
        borderBottomColor:'#e2b497',
        borderBottomWidth:2,
        marginHorizontal:24,
        marginVertical:4
    }
})