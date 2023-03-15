import React from 'react'
import { StyleSheet,View,Text } from 'react-native'


export default function SandBox () {
    return (
        <View style={styles.container}>
            <Text style={styles.textOne}>one</Text> 
            <Text style={styles.textTwo}>two</Text>
            <Text style={styles.textThree}>three</Text>
            <Text style={styles.textFour}>four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        // flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        paddingTop:40,
        backgroundColor:'#ddd',
        
    },
    textOne:{
        flex:1,
        backgroundColor:'violet',
        padding:10,
    },
    textTwo:{
        flex:1,
        backgroundColor:'red',
        padding:10
    },
    textThree:{
        flex:1,
        backgroundColor:'green',
        padding:10
    },
    textFour:{
        flex:1,
        backgroundColor:'brown',
        padding:10
    }
    
})