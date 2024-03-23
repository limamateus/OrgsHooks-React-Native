import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Topo from './componetes/Topo';
import Produtores from './componetes/Produtores';


export default function Home() {
  return (
   <>    
    <Produtores topo = {Topo}/>   
   </>
  );
}

