import React, {Component} from "react";
import {View, Text, StyleSheet, SafeAreaView} from "react-native";
import TodoList from "../../components/TodoList";
import {getTodos} from "../../data/todos";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 30
    },
    title: {
        fontWeight: "bold",
        fontSize: 20
    }
});

class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
    }
    componentDidMount = () => {
        this.setState({todos: getTodos()})
    }
    render() {
        const {todos} = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>ToDo List App</Text>
                <TodoList todos={todos}/>
            </SafeAreaView>
        )
    }
}

export default MainScreen;
