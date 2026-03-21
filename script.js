import { produtos } from "./produtos.js";

const elemento = {
  btnCurva: document.querySelectorAll(".btnCurva"),
  containerDisplay: document.querySelector("#containerDisplay"),
};
console.log(elemento.containerDisplay);
elemento.btnCurva.forEach((item) => {
  item.addEventListener("change", (evento) => {
    listarCurvas(evento.target.id);
  });
});

function listarCurvas(curva) {
  let curvaABC = produtos.filter((produto) => produto.curva_abc === curva);
  //   console.table(curvaABC);
  inserirDadosCurvaABC(curvaABC);
}

function inserirDadosCurvaABC(dados) {
  // criar os elementos para gerar os paragrafos (ainda sem dados - PURO)
  let colunasGRID = {
    id: document.createElement("p"),
    nome: document.createElement("p"),
    preco_venda: document.createElement("p"),
    estoque: document.createElement("p"),
  };

  // definindo valor para os paragrafos
  colunasGRID.id.innerText = "ID";
  colunasGRID.nome.innerText = "NOME";
  colunasGRID.preco_venda.innerText = "PREÇO DE VENDA";
  colunasGRID.estoque.innerText = "ESTOQUE";

  elemento.containerDisplay.append(
    colunasGRID.id,
    colunasGRID.nome,
    colunasGRID.preco_venda,
    colunasGRID.estoque,
  );
}
