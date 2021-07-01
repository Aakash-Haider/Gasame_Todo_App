import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, SafeAreaView, TouchableOpacity, FlatList, Pressable, StyleSheet } from 'react-native';
// import TodoList from '../components/TodoList';
import { Ionicons } from '@expo/vector-icons';
import AddModal from './AddModal';
import EditModal from './EditModal';


function MyCheckbox({ id, checked, setChecked, completed, markCompletedWithId }) {


    function onCheckmarkPress() {

    }

    return (
        <Pressable
            style={[styles.checkboxBase, completed && styles.checkboxChecked]}
            onPress={() => {
                setChecked(!completed),
                    markCompletedWithId(id, !completed)
            }}>
            {completed && <Ionicons name="checkmark" size={24} color="white" />}
        </Pressable>
    );
}

export default function Todo({ id, title, desc, completed, edit, setEdit, deleteItem, updateTodoWithId, markCompletedWithId }) {
    const [checked, setChecked] = useState(false);

    return (
        <View style={{ marginTop: 10, marginHorizontal: 10, padding: 5 }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                {/* CHECKBOX */}

                <MyCheckbox key={id} id={id} checked={checked} completed={completed} setChecked={setChecked} markCompletedWithId={markCompletedWithId} />
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>

                    {/* TITLE AND DESCRIPTION */}
                    <View style={{ flex: 1, marginRight: 10 }}>
                        <Text style={{ textDecorationStyle: 'solid', marginBottom: 5, textDecorationLine: completed ? 'line-through' : 'none', marginLeft: 10, color: '#000', fontSize: 22, fontWeight: '600', }}>{title}</Text>
                        <Text style={{ textDecorationStyle: 'solid', textDecorationLine: completed ? 'line-through' : 'none', fontSize: 15, fontWeight: '400', marginLeft: 10, }}>{desc}</Text>
                    </View>


                    {/* DELETE AND EDIT */}

                    <View style={{ justifyContent: 'space-evenly' }}>
                        <View>
                            <TouchableOpacity key={id} onPress={() => deleteItem(id)}>
                                <Ionicons name="trash-bin" size={20} color="#c21104" />
                            </TouchableOpacity>
                        </View>

                        <View style={{}}>
                            <TouchableOpacity key={id} onPress={() => setEdit(true)} >
                                <Ionicons name="ios-pencil" size={20} color="blue" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </View>
            <View style={{ marginTop: 15, width: '100%', height: 1, backgroundColor: '#8548BE' }} />
            <View style={{ position: 'absolute' }}>
                {edit && <EditModal key={id} todoId={id} edit={edit} setEdit={setEdit} oldTitle={title} oldDesc={desc} updateTodoWithId={updateTodoWithId} />}
            </View>

        </View >

    )

}


const styles = StyleSheet.create({
    checkboxBase: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#8548BE',
        backgroundColor: 'transparent',
    },

    checkboxChecked: {
        backgroundColor: '#8548BE',
    },

    appContainer: {
        flex: 1,
        alignItems: 'center',
    },

    appTitle: {
        marginVertical: 16,
        fontWeight: '600',
        fontSize: 24,
    },

    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    checkboxLabel: {
        marginLeft: 8,
        fontWeight: '500',
        fontSize: 18,
    },
});