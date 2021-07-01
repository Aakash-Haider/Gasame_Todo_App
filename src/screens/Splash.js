import React, { useEffect, useState } from 'react';
import { View, StatusBar, Image, ImageBackground, Text, AsyncStorage } from 'react-native';
import { getQuote } from '../helpers/WebApi';

function Splash({ navigation }) {

    const [quote, setQuote] = useState('');
    const [bg, setBg] = useState('https://theysaidso.com/img/qod/qod-inspire.jpg');
    const [author, setAuthor] = useState('');
    const [loggedin, setLoggedin] = useState('');


    getLoginStatus = async () => {
        const loginStatus = await AsyncStorage.getItem("isLoggedin");

        loginStatus === "true" ? setLoggedin(true) : setLoggedin(false);

    }
    useEffect(() => {
        getQOD();
        getLoginStatus();
        const timer = setTimeout(() => {
            loggedin ? navigation.replace('Home') : navigation.replace('Login')
        }, 3000);
        return () => clearTimeout(timer);
    }, [loggedin]);

    getQOD = async () => {
        await getQuote()
            .then(result => {
                if (result) {
                    let qod = result?.contents?.quotes[0]?.quote;
                    let background = result?.contents?.quotes[0]?.background;
                    let author = result?.contents?.quotes[0]?.author;
                    setQuote(qod);
                    setBg(background);
                    setAuthor(author);
                }
            })
            .catch(err => {
                console.log('error in getting quote is: ', err)
            })
    }

    return (

        <View style={{ flex: 1 }}>
            <StatusBar hidden />
            <ImageBackground blurRadius={5} style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }} source={{ uri: bg }} >
                <View style={{ marginHorizontal: 20 }}>
                    <Text style={{ fontSize: 22, fontWeight: '500', color: '#fff' }}>
                        {quote}
                    </Text>
                </View>

                <View style={{ marginTop: 10, marginEnd: 10, alignSelf: 'flex-end' }}>
                    <Text style={{ alignSelf: 'flex-end', fontSize: 16, fontWeight: '700', color: '#fff' }}>
                        {author}
                    </Text>
                </View>

            </ImageBackground>
        </View>
    );
}

export default Splash;

