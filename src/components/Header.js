
import React, { useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StatusBar, SafeAreaView, TouchableOpacity, AsyncStorage } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Header({ navigation }) {
    return (
        <LinearGradient
            colors={['#8548BE', '#054AA5']}
            style={{ padding: 10, justifyContent: 'center', alignItems: 'center', width: '100%', height: 70, flexDirection: 'row' }}>
            <View style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center', justifyContent: 'center', alignItems: 'center', width: '100%', }}>
                <Text style={{ fontSize: 25, color: '#fff', fontWeight: '600', }}>
                    Todo List
                </Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginRight: 10, height: '100%' }}>
                <TouchableOpacity onPress={() => { navigation.replace('Login'), AsyncStorage.setItem('isLoggedin', "false") }}>
                    <MaterialCommunityIcons name="logout" size={30} color="#fff" />
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )

}