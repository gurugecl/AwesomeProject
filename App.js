import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <WebView source={{uri: 'http://68.184.199.16:8081/vr/'}} />
        );
    }
}

// 192.168.60.108

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});