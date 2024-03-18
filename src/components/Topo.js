import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import logo from "../assets/logo.png";

const Topo = () => {
  return (
    <View style={estilos.topo}>
      <Image source={logo} style={estilos.image} />
      <Text style={estilos.boasVindas}>Olá Eduardo</Text>
      <Text style={estilos.legenda}>Encontre os melhores produtores</Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  topo: {
    marginTop: 30,
    backgroundColor: "#F6F6F6",
    padding: 20,
  },
  image: {
    width: 70,
    height: 28,
  },
  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
  },
});

export default Topo;
