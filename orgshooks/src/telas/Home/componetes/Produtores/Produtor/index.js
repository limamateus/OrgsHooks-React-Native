import React, { useMemo, useReducer, useState } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Estrelas from '../../../../../componetes/Estrelas'

const distanciaEmMetrosOuKm = (distancia) =>{
    console.log('distanciaEmMetros')
    if(distancia< 1000){
        return `${distancia}m`
    }
    return `${distancia/1000} km`
}


export default function Produtor({ nome, imagem, distancia, estrelas }) {

  //  const [selecionado, setSelecionado] = useState(false);

    const [selecionado, inverterSelecionado] = useReducer(
        (selecionado)=>
            !selecionado,
            false    
    )

    distanciaTexto = useMemo(() => distanciaEmMetrosOuKm(distancia),[distancia]);

    return <TouchableOpacity
        //onPress={() => setSelecionado(!selecionado)}
        onPress={inverterSelecionado}
        style={estilos.cartao}>
        <Image
            source={imagem} // Caminho da imagem 
            accessibilityLabel={nome} // Acessibilidade caso o usuario precisa ler a imagem 
            style={imagem} // Estilização da imagem
        />
        <View style={estilos.informacoes}>
            <View>
                <Text style={estilos.nome}>{nome}</Text>
                <Estrelas
                    quantidade={estrelas}
                    editavel={selecionado}
                    grande={selecionado}
                />
            </View>

            <Text style={estilos.distancia}>{distanciaTexto}</Text>
        </View>

    </TouchableOpacity>


}

const estilos = StyleSheet.create({
    cartao: {
        backgroundColor: '#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: 'row',
        // Android
        elevation: 8,

        // IOS
        shadowColor: '#000', // Cor
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62

    },
    imagem: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16
    },
    informacoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },
    nome: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold'
    },
    distancia: {
        fontSize: 12,
        lineHeight: 19

    }
})