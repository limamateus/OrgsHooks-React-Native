import { useEffect, useState } from "react";
import { carregaProdutores } from "../../servicos/carregarDados";


export default function useProdutores(){

    const [titulo,setTitulo] = useState('')
    const [lista,setLista] = useState([])

    useEffect(()=>{
        const retorno = carregaProdutores();
        retorno.lista.sort((produto1, produto2) => produto1.distancia -  produto2.distancia ,); 
        setTitulo(retorno.titulo);
        setLista(retorno.lista)

    },[]);

    return [titulo,lista];
}