import React from "react";
import estrela from '../../../assets/estrela.png'
import estrelaCinza from '../../../assets/estrelaCinza.png'
import {StyleSheet,TouchableOpacity,Image} from 'react-native'

export default function Estrela({
    onPress,
    desabilidata = true,   
    preenchida,
    grande,
}) {

    const getImagem = () => {
        if (preenchida) {
            return estrela
        }
        return estrelaCinza;
    }
    const estilos = estilosFuncao(grande) // Carregar os estilo das estrelas

    return <TouchableOpacity
       // key={i} // Chave do index
        onPress={onPress} // Funcão para clicar
        disabled={desabilidata}
    >
        <Image source={getImagem()} style={estilos.estrela} />

    </TouchableOpacity>
}


const estilosFuncao = (grande) => StyleSheet.create({
    estrela: {
        height: grande ? 32 : 16,
        width: grande ? 32 : 16,
        marginRight: 2
    }
})