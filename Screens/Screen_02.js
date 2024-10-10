import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Picker } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const bikes = [
    { id: '1', name: 'Pinarello', price: '1800', image: '../image/xedapxanh.png', description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.', category: 'road'},
    { id: '2', name: 'Pina Mountain', price: '1700', image: '../image/xedaptim.png', description: 'be it an answer, essay, story, emails, etc.', category: 'mountain' },
    { id: '3', name: 'Pina Bike', price: '1500', image: '../image/xedaptim2.png', description: 'be it an answer, essay, story, emails, etc.', category: 'road' },
    { id: '4', name: 'Pinarello', price: '1900', image: '../image/xedapdo.png', description: 'It is a very important form of writing as we write almost everything in paragraphs', category: 'road' },
    { id: '5', name: 'Pina Mountain', price: '2700', image: '../image/xedapdo2.png', description: 'It is a very important', category: 'mountain' },
    { id: '6', name: 'Pina Bike', price: '1350', image: '../image/xedapdocodai.png', description: 'It is a very important story, emails, etc.',  category: 'road' }
];



const Screen02 = ({ navigation }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    //Hàm lọc xe đạp theo loại
    const filterBikes = selectedCategory === 'all' ? bikes : bikes.filter(bike => bike.category === selectedCategory);

    const renderBike = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Screen03', { bike: item })}>
            <View style={styles.container1}>
                <Image source={{ uri: item.image }} style={styles.bikeImage} />
                <Image source={require('../image/icon-heart.png')} style={styles.iconheart} />
                <Text style={styles.bikeName}>{item.name}</Text>
                <View style={styles.container2}>
                    
                    <Text style={styles.bikePrice}>$
                        <Text style={styles.bikePrice2}>{item.price}</Text>
                    </Text>
                </View>
              
                


            </View>
            
        </TouchableOpacity>
       

    );

    return(
        <View style={styles.container}>
          
            <Text style={styles.title}>The world's Best Bike</Text>
            <View style={styles.containerSearch}>
                <TouchableOpacity style={styles.box}
                    onPress={() => setSelectedCategory('all')} // Cập nhật khi nhấn vào
                >
                    <Text style={[styles.titleSearch, selectedCategory === 'all' && styles.selectedText]}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}
                    onPress={() => setSelectedCategory('road')} // Cập nhật khi nhấn vào
                >
                    <Text style={[styles.titleSearch, selectedCategory === 'road' && styles.selectedText]}>Roadbike</Text>
                </TouchableOpacity>
                   
               
                <TouchableOpacity style={styles.box}
                    onPress={() => setSelectedCategory('mountain')} // Cập nhật khi nhấn vào
                
                >
                    <Text style={[styles.titleSearch, selectedCategory === 'mountain' && styles.selectedText]}>Mountain</Text>
                </TouchableOpacity>
            </View>
           
          
            <FlatList
                data={filterBikes}
                renderItem={renderBike}
                keyExtractor={(item) => item.id}
                numColumns={2}
            
                />
        

        </View> 

    );

};
const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center',  justifyContent: 'center' },
    bikeImage: {
        width: 135,
        height: 130,
        marginBottom: 10,
        
    },
    containerSearch: {
        flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginBottom: 40, marginTop: 30
       
    },
    container1: {
        padding: 10,
        width: 170,
        marginBottom: 30,
        height: 180,
        backgroundColor: '#f5eeda', 
        marginLeft: 20,

    },
    bikeName: {
        fontSize: 16,
        fontWeight: 'bold',
        opacity: 0.7,
        marginLeft: 35,
       
    },
       bikePrice: {
        fontSize: 16,
        color: 'orange',
       
    },
    bikePrice2: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
       
    },
    container2: {
      marginLeft: 45,

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'red',
        position: 'relative',
        left: -40,
        top: 0,
        marginLeft: 0,
        marginTop: 10,
        marginBottom: 20,
    },
    titleSearch: {
        fontSize: 16,
        opacity: 0.7,
        
      
    },
    box: {
        alignItems: 'center',
        fontSize: 22,
        marginBottom: 20,
        borderWidth: 1, // Độ dày của viền
        borderColor: 'red', // Màu sắc của viền
        borderStyle: 'solid', // Kiểu viền (solid, dashed, hoặc dotted)
        padding: 10, // Tùy chọn: khoảng cách giữa văn bản và viền
        width: 100,
        marginLeft: 20,
        marginHorizontal: 5,  // Khoảng cách giữa các ô
        borderRadius: 10,
      
    },
    bikePrice: {
        fontSize: 14,   
        color: 'orange',
    },
    iconheart: {
        width: 30,
        height: 25,
        position: 'absolute',
        top: 0,
        left: 0
    }, picker: {
        height: 50,
        width: 200,
    }, selectedText: {
        color: 'red',
    }
});
export default Screen02;
    
    