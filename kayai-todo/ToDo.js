import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";

const { width, heigh } = Dimensions.get("window");

class ToDo extends Component {
  state = {
    isEditing: false,
    isCompleted: false,
    toDoValue: ""
  };
    const { isCompleted, isEditing } = this.state;
    const { text } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.column}>
          <TouchableOpacity onPress={this._toggleComplete()}>
            <View
              style={[
                styles.circle,
                isCompleted ? styles.completedCircle : styles.uncompletedCircle
              ]}
            />
          </TouchableOpacity>
         
        </View>
        <View style={styles.column}>
          {isEditing ? (
            <View style={styles.actions}>
              <TouchableOpacity onPressOut={this._finishiEditing}>
                <View sytle={styles.actionContainer}>
                  <Text style={styles.actionText}>확인</Text>
                </View>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.actions}>
              <TouchableOpacity onPressOut={this._startEdition}>
                <View sytle={styles.actionContainer}>
                  <Text style={styles.actionText}>수정</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View sytle={styles.actionContainer}>
                  <Text style={styles.actionText}>취소</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  }
  _toggleComplete = () => {
    this.setState(prevState => {
      return {
        isCompleted: !prevState.isCompleted
      };
    });
  };
  _startEdition = () => {
    const { text } = this.props;
    this.setState({
      isEditing: true,
      toDoValue: text 
    });
  };

  _finishiEditing = () => {
    this.setState({
      isEditing: false
    });
  };
}

const styles = StyleSheet.create({
  container: {
    width: width - 50,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row"
  },
  circle: {
    width: 50,
    heigh: 50,
    boderRadius: 25,
    backgroundcolor: "red",
    marginRight: 20,
    borderColor: "red",
    borderWidth: 3
  },
  text: {
    fontWeight: "600",
    fontSize: 20,
    marginVertical: 20
  },
  completedCircle: {
    borderColor: "#bbb"
  },
  uncompletedCircle: {
    borderColor: "#F23657"
  },
  completedText: {
    color: "#bbb",
    textDecorationLine: "line-through"
  },
  uncompletedText: {
    color: "#353535"
  }
});
