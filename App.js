import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <WebView style={styles.container}>
                <WebView source={{uri: 'http://192.168.2.13:8081/vr/'}} style={{margin: 20}} />
                <WebView source={{uri: 'http://192.168.2.13:8081/vr/'}} style={{margin: 20}} />
            </WebView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'black',
        z-index: -1
    },
});


// export default class JustifyContent extends Component {
//     render() {
//         return (
//             <View style={{
//                 flex: 1,
//                 flexDirection: 'column',
//                 justifyContent: 'space-around',
//                 alignItems: 'center',
//                 backgroundColor: 'black'
//             }}>
//                 <View style={{width: 195, height: 195, backgroundColor: 'steelblue'}} />
//                 <View style={{width: 195, height: 195, backgroundColor: 'steelblue'}} />
//             </View>
//         );
//     }
// };