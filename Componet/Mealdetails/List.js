import { StyleSheet, Text, View } from "react-native";

export default function List({data}){
return data.map((el)=>{
    return <View key={el} style={styles.listitem}>
        <Text style={styles.itemtext}>{el}</Text>                                    
        </View>
})

}

const styles=StyleSheet.create({

listitem:{
    borderRadius:6,
    paddingHorizontal:8,
    paddingVertical:4,
    marginVertical:4,
    marginHorizontal:24,
    backgroundColor:'#e2b497'
},
itemtext:{
    color:'#351401',
    textAlign:'center'
}

})

















