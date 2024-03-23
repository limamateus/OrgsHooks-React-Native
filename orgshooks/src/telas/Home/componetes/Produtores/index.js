import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
//import {carregaProdutores} from '../../../../servicos/carregarDados'
import Produtor from "./Produtor";
import useProdutores from "../../../../hooks/Produtores/useProdutores";

export default function Produtores({topo:Topo}){

    const [titulo,lista] = useProdutores();

  /*  const [titulo,setTitulo] = useState('')
    const [lista,setLista] = useState([])
    useEffect(()=>{
        const retorno = carregaProdutores();
        setTitulo(retorno.titulo);
        setLista(retorno.lista)

    },[]);*/

    const TopoLista = () =>{
        return <Text style={estilos.titulo}>{titulo}</Text>
    }
    return(
        <>
        <Topo/>
        <FlatList
            data={lista}
            keyExtractor={({nome}) => nome} // não é boa pratica colocar nome o ideal seria o ID
            renderItem={({item}) =><Produtor {...item}/>}
            ListHeaderComponent={TopoLista}
        
        />
        </>
        
    )
}

const estilos = StyleSheet.create({
    titulo:{
        fontSize:20,
        lineHeight:32,
        marginHorizontal:16,
        marginTop:16,
        color:'#464646'
    }
})