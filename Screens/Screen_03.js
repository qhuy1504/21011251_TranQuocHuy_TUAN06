import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
const Screen03 = ({ route }) => {
    const { bike } = route.params;
    return (
        <View style={styles.container}>
            <Image source={{ uri: bike.image }} style={styles.bikeImage} />
            
            <View style={styles.details}>
                <Text style={styles.bikeName}>{bike.name}</Text>
                <View style={styles.pricecontainer}>
                <Text style={styles.bikePrice}>{`15% OFF | $${bike.price}`}</Text>
                    <Text style={styles.originalPrice}>{`${parseFloat(bike.price) * 1.2}$`}</Text>
                </View>
                <Text style={styles.descriptiontitle}>Description</Text>
                <Text style={styles.description}>{bike.description}</Text>
            </View>
           
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Add to cart</Text>
            </TouchableOpacity>
        </View>
    );

};
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    pricecontainer: { flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: -60},
    details: { position: 'relative' , left: 0},
    bikeImage: { width: 292, height: 270, marginBottom: 20 },
    bikeName: { fontSize: 30, fontWeight: 'bold' },
    bikePrice: { fontSize: 25 },
    originalPrice:{fontSize: 25, textDecorationLine: 'line-through', marginBottom: 20, marginLeft: 20, marginTop: 20, fontWeight: 'bold'},
    description: {
        fontSize: 16, marginBottom: 20
    },
    descriptiontitle: {
        fontSize: 20, marginBottom: 20, fontWeight: 'bold'
    },
    button: { backgroundColor: 'red', padding: 15, borderRadius: 10, alignItems: 'center' , paddingHorizontal: 100, borderRadius: 50 },
    buttonText: { color: 'white', fontSize: 16 , alignItems: 'center', fontWeight: 'bold'},

});
export default Screen03;