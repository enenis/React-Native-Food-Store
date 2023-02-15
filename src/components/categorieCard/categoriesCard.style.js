import { StyleSheet,Dimensions } from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        backgroundColor:"white",
        margin:5,
        padding:10,
        borderBottomLeftRadius:50,
        borderTopLeftRadius:50,
        borderBottomRightRadius:5,
        borderTopRightRadius:5,
        borderWidth:1,
        borderColor:"gray"
    },
    image:{
        resizeMode:"contain",
        minHeight:80,
        minWidth:80,
        margin:-5,
        borderRadius:40
    },
    text:{
        textAlignVertical:"center",
        marginLeft:12,
        color:"#0e0e0e",
        fontWeight:"bold",
        fontSize:20
    }
})