import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import Produtor from "./Produtor";
import useProdutores from "../hooks/useProdutores";

const ProdutoresComponent = ({ topo: Topo }) => {
  const [titulo, lista] = useProdutores();

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
      data={lista.sort((a, b) => a.distancia - b.distancia)}
      key={({ item }) => item.id}
      renderItem={({ item }) => <Produtor {...item} />}
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
