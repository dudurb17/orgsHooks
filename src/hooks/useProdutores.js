import { useEffect, useState } from "react";
import { carregaProdutores } from "../services/carregaDados";

export default function useProdutores() {
  const [titulo, setTitulo] = useState("");
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const retorno = carregaProdutores();
    setTitulo(retorno[0].titulo);
    setLista(retorno[0].lista);
  }, []);

  return [titulo, lista];
}
