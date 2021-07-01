
import React, { useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';

export default function AddFab({ setShowModal }) {
    return (

        <TouchableOpacity style={{
            position: 'absolute',
            bottom: 20,
            right: 10,
            zIndex: 10,
            width: 60,
            height: 60,
            borderRadius: 30,
        }} onPress={() => setShowModal(true)}>
            <LinearGradient
                colors={['#8548BE', '#054AA5']}
                style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >

                <Text style={{ color: '#fff', fontSize: 30 }}>
                    +
                </Text>
            </LinearGradient >
        </TouchableOpacity>

    )
}
