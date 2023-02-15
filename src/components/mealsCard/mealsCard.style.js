import { StyleSheet,Dimensions } from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        marginVertical:10,
        padding:10,

        
    },
    image:{
        // width:Dimensions.get("window").width/1,
        height:Dimensions.get("window").height/4,


    },
    inner_container:{
        position: 'absolute',
        justifyContent: 'flex-end',
        alignItems: 'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        
    },
    text_container:{
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        width:Dimensions.get("window").width -21,
        padding: 10,
        alignItems:"flex-end",
    },
    title:{
        color:"white",
        
    },
})