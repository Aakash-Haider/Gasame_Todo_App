import { LinearGradient } from 'expo-linear-gradient';
// import { Card, } from 'native-base';
import React from 'react';
import { Image, StyleSheet, Card, StatusBar, Text, TouchableOpacity, View, AsyncStorage, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';


export default function Login({ navigation }) {

    const [email, setEmail] = React.useState('');

    const [password, setPassword] = React.useState('');


    const handleLogin = () => {
        if (
            email.trim().toLowerCase() === "test@gasame.com" && password.trim().toLowerCase() === '12345678'
        ) {

            navigation.replace('Home');
            AsyncStorage.setItem('isLoggedin', "true");
        } else if (email.trim().toLowerCase() === "" && password.trim().toLowerCase() === '') {
            Alert.alert("Empty Fields", "You cant leave fields empty. Enter valid Email and Password")
        }
        else {
            Alert.alert("Wrong Credentials", "Try once again with valid credentials")
        }


    }
    return (
        <View style={styles.container}>

            <StatusBar hidden />
            <LinearGradient
                colors={['#8548BE', '#054AA5']}
                style={{ padding: 15, alignItems: 'center', height: '100%' }}>
                <View style={{ marginVertical: 30, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 28, fontWeight: '600', color: '#fff' }} >
                        Login
                    </Text>
                </View>

                {/* Card */}
                <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#fff', shadowOffset: { width: 10, height: 10 }, width: '95%', height: '50%', marginBottom: 20, borderBottomLeftRadius: 121, borderBottomRightRadius: 31, borderTopLeftRadius: 31, borderTopRightRadius: 31 }}>


                        <View style={{ marginHorizontal: 20, }}>


                            <TextInput
                                label="Email"
                                keyboardType={'email-address'}
                                value={email}
                                style={styles.textInput}
                                onChangeText={text => setEmail(text)}
                            />
                            <TextInput
                                label="Password"
                                secureTextEntry={true}
                                value={password}
                                style={styles.textInput}
                                onChangeText={text => setPassword(text)}
                            />

                            <View style={{ marginTop: 20 }}>
                                <TouchableOpacity>
                                    <Text style={styles.forgotText}>
                                        Forgot password?
                                    </Text>
                                </TouchableOpacity>

                            </View>

                        </View>
                        <View style={{ position: 'absolute', right: 20, bottom: 10 }}>
                            <TouchableOpacity onPress={() => handleLogin()}>
                                <Image style={{ width: 50, height: 50 }} source={require('../../assets/btnLogin.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View>
                        <TouchableOpacity style={{ flexDirection: 'row' }} >
                            <Text style={{ fontSize: 15, color: '#fff' }} >
                                {`Don't have an account? `}
                            </Text>
                            <Text style={{ fontSize: 15, fontWeight: '600', color: '#fff' }} >
                                Click here
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAF1F9',
    },
    textInput: {
        backgroundColor: '#fff',
        marginVertical: 5,
        borderRadius: 20
    },

    forgotText: {
        alignSelf: 'flex-end',
        color: '#8548BE',

    }
});
