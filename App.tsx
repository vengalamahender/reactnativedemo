import React,{ useState } from 'react';
import {  StyleSheet, View , FlatList, Alert} from 'react-native';
import AddTodo from './components/addtodo';
import Header from './components/header'
import SandBox from './components/sandbox';
import TodoItem from './components/todoitem';



export default function App() {

  const [todos,setTodos] = useState([
    {text:'buy a coffee' , key:'1'},
    {text:'create an app' , key:'2'},
    {text:'play on the switch' , key:'3'}
  ])

  const pressHandler = (key:any) => {
      setTodos((prevState)=> {
        return prevState.filter((item)=>item.key!==key)
      })
  }
  const submitHandler = (text:any) => {
    if(text.length > 3 ){
      setTodos((prevTodos)=>{
          return [
            {text:text , key:Math.random().toString()},
            ...prevTodos
          ]
      })
    } else {
      console.log('else block')
      Alert.alert('OOPS!','Todos must be over 3 chars long',[{text:'Under Stood' , onPress:() => console.log('alert closed')}])
    }
    
  }
  return (
    // <View style={styles.container}>
    //   <SandBox />
    // </View>
    <View style={styles.container}>
        <Header />
        <View style={styles.content}>
            <AddTodo submitHandler={submitHandler} />
            <View style={styles.list}>
                <FlatList 
                    data = {todos}
                    renderItem={({item})=>(
                      // <Text>{item.text}</Text>
                      <TodoItem item={item} pressHandler={pressHandler} />
                    )
                  }
                />
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:0,
  },
  content: {
    padding:20
  },
  list: {
   marginTop:0
  }
});
