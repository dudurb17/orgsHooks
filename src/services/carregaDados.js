import { produtores } from "../mocks/produtores";
import { topo } from "../mocks/topo";

export const carregaProdutores = () => {
  return produtores.sort(function (a, b) {
    return b.estrelas - a.estrelas;
  });
};

export const carregaTopo = () => {
  return topo;
};
