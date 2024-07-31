import { Pressable, StyleSheet, Text, View,Platform} from "react-native";

export default function Gridtile({title,color ,press}){
    return <View style={styles.gridcontainer}>
        <Pressable style={({pressed})=>[styles.button,pressed ? styles.op:null]}
         android_ripple={{color:'#ccc'}} onPress={press}>
        <View style={[styles.Textedition,{backgroundColor:color}]}>
            <Text style={styles.fontstyles}>{title}</Text>
        </View>
        </Pressable>
    </View>
}


const styles=StyleSheet.create({
    gridcontainer:{
        flex:1,
        margin:16,
        height:150,
        borderRadius:8,
        elevation:4,
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.25,
        shadowRadius:8,
        backgroundColor:'white',
        overflow:Platform.select({ios:'visible',android:'hidden'})
    },
    button:{
        flex:1
    },
    Textedition:{
        flex:1,
        padding:16,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,


    },
    fontstyles:{
        fontSize:20,
        fontWeight:'bold'
    },
    op:{
        opacity:0.5
    }
})