import { produtos } from "./produtos.js";
import { ListarIDSeNome } from "./exercicios.js";
const elemento = {
  btnCurva: document.querySelectorAll(".btnCurva"),
  containerDisplay: document.querySelector("#containerDisplay"),
  btnListarTodos: document.getElementById("listarTodos")
};

elemento.btnCurva.forEach((item) => {
  item.addEventListener("change", (evento) => {
    listarCurvas(evento.target.id);
  });
});

function listarCurvas(curva) {
  let curvaABC = produtos.filter((produto) => produto.curva_abc === curva);

  inserirDadosCurvaABC(curvaABC);
}

function inserirDadosCurvaABC(dados) {
  elemento,containerDisplay.innerHTML = "";
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
  // console.table(dados)
// variavel par arecerv os dados do tipo curva ABC selecionada
  let dadosFiltrados = dados

  // metodo para listar os campos 
  dadosFiltrados.forEach((item)=>{
    let produto ={
      id: item.id,
      nome: item.nome,
      preco_venda: item.preco_venda,
      estoque: item.estoque
    };
    // criação dos paragrafos
    let id = document.createElement("p");
    let nome = document.createElement("p");
    let preco_venda = document.createElement("p");
    let estoque = document.createElement("p");

    // definição do texto em cada coluna
    id.innerText = produto.id;
    nome.innerText = produto.nome;
    preco_venda.innerText = produto.preco_venda;
    estoque.innerText = produto.estoque;

    elemento.containerDisplay.append(id, nome, preco_venda, estoque);
  });
}


  elemento.btnListarTodos.addEventListener("click",(evento)=>{
  
  });