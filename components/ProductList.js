import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ProductsItems from "./ProductsItems";

const ProductList = ({products}) => {
    return(
        <FlatList data={products} keyExtractor={
            product => product.id.toString()}
        renderItem={({item})=>{
            return <ProductsItems product={item}/>
        }}/>
    );
}

const styles = StyleSheet.create({
    FlatList: {
        flex: 1,
        backgroundColor: 'grey'
    }
})

export default ProductList;