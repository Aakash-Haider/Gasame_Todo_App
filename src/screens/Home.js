import React, { useEffect, useState, useRef } from 'react';
import { View, StatusBar, SafeAreaView, FlatList, Platform, Text } from 'react-native';
import AddFab from '../components/AddFab';
import AddModal from '../components/AddModal';
import EditModal from '../components/EditModal';
import Header from '../components/Header';
import Todo from '../components/TodoList';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { firebaseConfig } from '../helpers/config.js'
import * as firebaseObj from 'firebase'

if (!firebaseObj.apps.length) {
    firebaseObj.initializeApp(firebaseConfig);
}


function Home({ navigation }) {
    const [showModal, setShowModal] = useState(false);
    const [todos, setTodo] = useState([]);
    const [edit, setEdit] = useState(false);

    const flatlistRef = useRef();

    useEffect(() => {
        /// Read data change
        const myTodos = firebaseObj.database().ref('todos').orderByChild('timestamp');;
        myTodos.on("value", datasnap => {
            const dataObj = datasnap?.val();
            const dataArray = [];
            if (dataObj) {
                Object?.keys(dataObj)?.forEach(key => dataArray.push(
                    dataObj[key]
                ));
                setTodo(dataArray);
            }
            else {
                setTodo([])
            }
        })
    }, [])


    function writeUserData(todoId, title, desc) {
        const currentDate = new Date(); const timestamp = currentDate.getTime();
        firebaseObj.database().ref('todos/todo' + todoId).set({
            id: todoId,
            title: title,
            desc: desc,
            timestamp: timestamp,
            completed: false
        })
    }


    function deleteTodoWithId(todoId) {
        firebaseObj.database().ref('todos/todo' + todoId).remove();
    }


    function updateTodoWithId(todoId, updatedTitle, updatedDesc) {
        firebaseObj.database().ref('todos/todo' + todoId).update({ 'title': updatedTitle, 'desc': updatedDesc })
    }
    function markCompletedWithId(todoId, status) {
        firebaseObj.database().ref('todos/todo' + todoId).update({ 'completed': status })
    }
    const renderItem = ({ item, index }) => (
        <View>
            <Todo id={item.id} title={item.title} desc={item.desc} completed={item.completed} edit={edit} setEdit={setEdit} deleteItem={deleteTodoWithId} updateTodoWithId={updateTodoWithId} markCompletedWithId={markCompletedWithId} />
        </View>
    );

    function addTodo(title, desc) {
        const randomId = (Math.floor(Math.random() * 100000) + 1).toString();
        writeUserData(randomId, title, desc)
    }


    const TodoList = () => {
        function compare(a, b) {
            if (a.timestamp > b.timestamp) {
                return -1;
            }
            if (a.timestamp < b.timestamp) {
                return 1;
            }
            return 0;
        }

        const data = todos.sort(compare);

        return (
            data.length > 0 ?
                (
                    <FlatList
                        ref={flatlistRef}
                        showsVerticalScrollIndicator={false}
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    //   onContentSizeChange={() => flatlistRef.current.scrollToEnd({ animating: true })}
                    />
                )
                :
                (
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, marginHorizontal: 50 }}>
                        <MaterialCommunityIcons name="emoticon-sad-outline" size={150} color="#8548BE" />
                        <Text style={{ fontSize: 18, textAlign: 'justify' }}>
                            You dont have any Todo list right now. Press add button to create one.
                        </Text>
                    </View>
                )

        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', }}>

            <StatusBar barStyle={Platform.OS == 'android' ? 'light-content' : 'dark-content'} />
            <Header navigation={navigation} />
            <AddFab setShowModal={setShowModal} />

            <TodoList />

            <AddModal showModal={showModal} setShowModal={setShowModal} addTodo={addTodo} edit={edit} />
            {/* {edit && <EditModal edit={edit}  />} */}

        </SafeAreaView>

    );
}

export default Home;