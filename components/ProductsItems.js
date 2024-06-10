import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';

const ProductsItems = ({product}) => {
    return (
        // Contenedor principal
        <View style={styles.container}>
            <Text >Resultados de busqueda</Text>
            <Text style={styles.TextProductTitle}>Producto: {product.name}</Text>
            <Text style={styles.TextProductCost}>Precio: {product.cost}</Text>
            <Text style={styles.TextProductDescription}>Descripcion: {product.description}</Text>
            <Image source={{uri: product.image}} style={styles.productImage}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black', // Add this line to set the border color to black
    },
    TextProductTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    TextProductCost: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    TextProductDescription: {
        fontSize: 14,
    },
    productImage: {
        width: 100,
        height: 100,
        borderRadius: 5,
    }
})

export default ProductsItems;