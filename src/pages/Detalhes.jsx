import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../axios";
import { Card, Descricao, Duracao, ImagemCard, SobreCard, SubtituloCard, Titulo, TituloCard } from "./styles";

export const Detalhes = () => {
    const [dados, setDados] = useState()
    const {id} = useParams()

    async function buscar_curso(){
        const {data} = await api.get(id)
        setDados(data)
    }

    useEffect(()=>{
        buscar_curso()
    }, [])

    return(
        <>
      <Titulo>Detalhes</Titulo>
            {dados && 
            <Card>
                <TituloCard>{dados.titulo}</TituloCard>
                <SubtituloCard>{dados.subtitulo}</SubtituloCard>
                <ImagemCard src={dados.foto}/>
                <Descricao>{dados.descricao}</Descricao>
                <Duracao>{dados.duracao}</Duracao>
                <SobreCard>{dados.sobre}</SobreCard>
            </Card>}
            
        </>
    )
}
  