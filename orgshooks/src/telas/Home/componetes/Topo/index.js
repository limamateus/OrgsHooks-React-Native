import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import imgLogo from '../../../../assets/logo.png'
import {carregaTopo} from '../../../../servicos/carregarDados'


class Topo extends React.Component{
    
    state ={
        topo:{
            boasVindas:'',
            legenda:'',
        }
    }
   
    atualizaTopo(){
        const retorno = carregaTopo();
        this.setState({topo: retorno})
    }
    componentDidMount(){
        this.atualizaTopo();
    }
    render(){
        return(
            <View style={estilos.topo}>
                <Image source={imgLogo} style={estilos.imagem}/>
                <Text style={estilos.boasVindas}>{this.state.topo.boasVindas}</Text>
                <Text style={estilos.legenda}> {this.state.topo.legenda}</Text>
            </View>
        )
    }
       
   
  
}

const estilos = StyleSheet.create({
    topo:{
        backgroundColor:'#F6F6F6',
        padding: 16,
        margin: 20
    },
    imagem:{
        height:28,
        width:70
    },
    boasVindas:{
        marginTop: 20,
        fontSize:26,
        fontWeight:'bold',
        lineHeight:42,
        color:'#434343'
    },
    legenda:{
        fontSize:16,
        lineHeight:26,
        color:'#A3A3A3'
    }
});


export default Topo;