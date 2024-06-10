import React, {useState} from 'react';
import { StyleSheet, View} from 'react-native';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import products from './data'; 

export default function App() {
  const [search, setSearch] = React.useState(products);
  const [allProducts, setAllProducts] = useState(products);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (searchText: string) => {
    const filtered = allProducts.filter((product: any) => {
      product.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredProducts(filtered);
  }
  
  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} /> 
      <ProductList products={filteredProducts} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'linear-gradient(to bottom right, #00ff00, #00cc00)',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
