import { StyleSheet }  from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    SwitchButtonContainer:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        width:250,
        height:70,
        position:'absolute',
        bottom:50
    },
    SwitchButton:{
        textAlign:'center',
        padding:1,
        display:'flex',
        width:70,
        height:70,
        borderRadius:35,
        marginLeft:80,
        justifyContent:'center',
        opacity:1,
    },
    Arrow:{
        fontSize:40,
        display:'flex',
        textAlign:'center',
        alignItems:'center',
        padding:0,
        margin:0,
        marginBottom:20,
    },
    SwitchButtonActived:{
    },
     SwitchButtonDisabled:{
    },
    background:{
        flex:1, 
    },
})
