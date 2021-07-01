
import React, { useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Modal, Pressable, StatusBar, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function EditModal({ todoId, edit, setEdit, oldTitle, oldDesc, updateTodoWithId }) {
    const [title, setTitle] = React.useState(oldTitle);

    const [desc, setDesc] = React.useState(oldDesc);

    function EditTodo() {
        if (title == '' || desc == '') {
            return
        }

        setTitle('');
        setDesc('');
        setEdit(false);
        updateTodoWithId(todoId, title, desc);

    }
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={edit}
                onRequestClose={() => {
                    //    Alert.alert("Modal has been closed.");
                    setShowModal(false);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{ marginBottom: 10 }}>
                            <TextInput
                                label="Title"
                                keyboardType={'default'}
                                value={title}
                                style={styles.textInput}
                                onChangeText={text => setTitle(text)}
                            />
                            <TextInput
                                label="Description"
                                multiline={true}
                                keyboardType={'default'}
                                value={desc}
                                style={styles.textInput}
                                onChangeText={text => setDesc(text)}
                            />
                        </View>


                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => { EditTodo() }}
                        >
                            <Text style={styles.textStyle}>Update Todo</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonClose: {
        backgroundColor: "#8548BE",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    textInput: {
        width: 200,
        backgroundColor: '#fff'
    },

    forgotText: {
        alignSelf: 'flex-end',
        color: '#8548BE',
    }
});