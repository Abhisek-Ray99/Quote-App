import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert, Image, Button } from 'react-native';


export default function App() {

  const [quote, setQuote] = useState({})
  const [hasError, setErrors] = useState(false);

  useEffect(() => {
  async function fetchQuote (){
    const res = await fetch("https://api.whatdoestrumpthink.com/api/v1/quotes/random");
    res
      .json()
      .then(res => setQuote(res.message))
      .catch(err => setErrors(err));
  }
    fetchQuote();
  });
 
  const quoteAlert = () => {
    Alert.alert(JSON.stringify(quote))
  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Life of Quote</Text>
      <Image source={require('./src/message.png')} style={styles.image} />
      <Text style={styles.header}>I Quote for making{'\n'} your way better</Text>
      <TouchableHighlight style={styles.button} onPress={quoteAlert}>
        <Text style={styles.buttonText}> Press here to see the Quotes </Text>
      </TouchableHighlight>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    backgroundColor: '#FF9F55',
    paddingVertical: 10,
    paddingHorizontal: 100,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginHorizontal: 0
  },
  image: {
    marginBottom: 10,
    height: "50%",
    width: "100%",
  },
  header: {
    marginBottom: 50,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: '#FFE17C'
  },
  button: {
    backgroundColor: '#E29F2D',
    padding: 10, 
    alignItems: "center",
    borderRadius: 15,
    marginBottom: 80,
    elevation: 8
  },
  buttonText: {
    color: '#fff',
    textTransform: 'uppercase'
  }

});