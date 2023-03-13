import React from "react";
import { StyleSheet , Text,TouchableOpacity} from 'react-native';

export default function TodoItem(props:any){
    console.log('item',props)
    const handlePress = (item:any) => {
        props.pressHandler(item.key)
    }
    return(
        <TouchableOpacity onPress={() => handlePress(props.item)}>
            <Text style={styles.item}>
                {props.item.text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10,
    }
})