import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';



const Screen01 = ({ navigation }) => {
    return (
        
        <View style={styles.container}>
            <Text style={styles.title1}>A premium online store for</Text>
            <Text style={styles.title3}>sporter and their stylish choice</Text>
            <View style={styles.container1}> <Image source={require('../image/xedapxanh.png')} style={styles.bikeImage} /></View>
            <Text style={styles.title}>POWER BIKE</Text>
            <Text style={styles.title2}>SHOP</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Screen02')}
            >
                <Text style={styles.buttonText}>Get started</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    container1: { justifyContent: 'center', alignItems: 'center' , width: 360, height: 320, marginBottom: 20, borderRadius: 50, backgroundColor: '#E941411A' },
    bikeImage: { width: 292, height: 270, marginBottom: 20, alignItems: 'center' },
    title: { fontSize: 24, fontWeight: 'bold' },
    title3: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, alignItems: 'center', marginLeft: 20, fontFamily: 'sans-serif' },
    title2: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    title1: { fontSize: 22, fontWeight: 'bold' , alignItems: 'center', marginLeft: 20, fontFamily: 'sans-serif' },
    subtitle: { textAlign: 'center', fontSize: 16, marginBottom: 20 },
    button: { backgroundColor: 'red', padding: 15, borderRadius: 10 ,paddingHorizontal: 100, borderRadius: 50 },
    buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold'}
});

export default Screen01;
