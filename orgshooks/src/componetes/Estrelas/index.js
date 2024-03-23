import React, { useState } from "react";
import {StyleSheet,  View } from "react-native";
import Estrela from "./Estrela";



export default function Estrelas({
    quantidade: quantidadeAntiga,
    editavel = false,
    grande = false,
}) {
    const [quantidade,setQuantidade] = useState(quantidadeAntiga);
  
    
   
    const RederEstrelas = () => { // função para renderizar as estrelas  de acordo com  a quantidade
        const listaEstrelas = []; // Para isso preciso criar uma constate de uma lista vazia

        for (let i = 0; i < 5; i++) { // percorrer cada estrela da lista
            listaEstrelas.push( 
                <Estrela
                     key={i}
                   onPress={() => setQuantidade(i + i)}
                    desabilidata={!editavel}
                    preenchida={i < quantidade}
                    grande={grande}
                />
            );
        }
        return listaEstrelas;
    }
       return <View style={estilos.estrelas}>

        <RederEstrelas />
    </View>
}


const estilos = StyleSheet.create({
    estrelas: {
        flexDirection: 'row'
    }
   
})