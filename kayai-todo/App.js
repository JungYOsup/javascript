import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Dimensions,
  Platform,
  ScrollView

} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import ToDo from "./ToDo"


const { height, width } = Dimensions.get("window");

export default class App extends React.Component {

state={
  newToDO=""
}

  render() {
    const {newToDO} = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Kawai to Do</Text>
        <View style={styles.card}>
          <TextInput 
          style={styles.TextInput} 
          placeholder="New to Do" 
          value={newToDO} 
          onChangeText={this._controlNewToDo} 
          placeholderTextColor={"#999"}
          returnKeyType={"done"}
          autoCorrect={false}
          
          />
          
        </View>
        <ScrollView contentContainerStyle={styles.ToDos}>
          <ToDo text={"Hello i'm a To Do"}/>
        </ScrollView>
      </View>
    );
    
  }
  //onChangeText : 입력 요소에 변경이 생기면 발생한다.
  _controlNewToDo = text => {
    this.setState({
      newToDO : text
    })
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F23657",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "white",
    fontSize: 20,
    marginTop: 50,
    fontWeight: "200"
  },
  card: {
    flex: 1,
    backgroundColor: "white",
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {},
      android: {
        elevation: 3
      }
    })
  },
  TextInput : {
    fontSize : 30,
    color : "black",
  },
  ToDos:{
    alignItems: "center"
  }
});
