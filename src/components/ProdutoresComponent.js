import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { carregaProdutores } from "../services/carregaDados";

const ProdutoresComponent = ({ topo: Topo }) => {
  const [titulo, setTitulo] = useState("");
  const [lista, setLista] = useState([
    {
      nome: "",
      image: "",
    },
  ]);

  useEffect(() => {
    const retorno = carregaProdutores();
    setTitulo(retorno[0].titulo);
    setLista(retorno[0].lista);
  }, []);

  const TopoLista = () => {
    return (
      <>
        <Topo />
        <Text style={estilos.titulo}>{titulo}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={lista}
      keyExtractor={({ nome }) => nome}
      renderItem={({ item }) => <Text>{item.nome}</Text>}
      ListHeaderComponent={TopoLista}
    />
  );
};

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: "bold",
    color: "#464646",
  },
});

export default ProdutoresComponent;
