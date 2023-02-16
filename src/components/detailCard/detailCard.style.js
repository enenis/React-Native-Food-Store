import { StyleSheet,Dimensions } from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
    },
    image:{
        width:Dimensions.get("window").width/1,
        height:Dimensions.get("window").height/4,
        // resizeMode:"contain"
    },
    text:{
        color: '#B62D2D',
        fontSize:25,
        fontWeight:"bold",
    },
    area:{
        color: '#B62D2D',
        fontSize:20,
        fontWeight:"bold",
    },
    seperator:{
        borderBottomColor: '#D2D2D2',
        borderBottomWidth: 1,
        marginTop: 3,
        marginBottom: 3,
    },
    desc:{
        fontSize:14,
        color:"black"
    },
    button:{
        borderWidth: 1,
    backgroundColor: 'red',
    margin: 6,
    padding: 4,
    height: 40,
    borderColor: 'red',
    borderRadius: 6,
    },
    button_text:{
        textAlign: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    }
})