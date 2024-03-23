
import { SafeAreaView, StyleSheet } from 'react-native';
import Home from './src/telas/Home';
import React from 'react';

function App() {
  
  return <SafeAreaView style={estilos.tela}>
      <Home />
    </SafeAreaView>

}


const estilos = StyleSheet.create({
  tela:{
    flex:1,
  }
})

export default App;

