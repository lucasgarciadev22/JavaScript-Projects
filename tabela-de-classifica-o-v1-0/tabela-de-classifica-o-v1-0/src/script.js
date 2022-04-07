//           chave.   valor.
var jogadornovo = {
  nome: "Lucas",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
//acessando objetos
//função para definição dos pontos
function calcularPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}
//chamar função e salvar resultado no objeto jogador selecionado
jogadornovo.pontos = calcularPontos(jogadornovo);
console.log(jogadornovo);
//array de jogadores
var jogadores = [jogadornovo];
//função de estruturação da tabela de classificação
function exibeJogadores(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }
  //exibir jogadores na tela html
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}
exibeJogadores(jogadores); //chama função para criar a tabela no html
//funções de Ações:
function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calcularPontos(jogador); //passa a função de calcular pontos para atualizar os pontos do jogador
  exibeJogadores(jogadores); //escreve no html para atualizar tabela de classificação
}
function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calcularPontos(jogador); //passa a função de calcular pontos para atualizar os pontos do jogador
  exibeJogadores(jogadores); //escreve no html para atualizar tabela de classificação
}
function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadores(jogadores); //escreve no html para atualizar tabela de classificação
}
function adicionarJogador(i) {
  //cria novo objeto de jogador interno da função
  var jogadornovo = {
    nome: "",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  var jogador = jogadores[i]; //chama o array gloabal dentro de uma variavel local na funcao
  jogadornovo.nome = document.getElementById("novojogador").value; //leitura de input
  var adiciona = jogadores.push(jogadornovo); //acrescenta objeto criado dentro do array global jogadores
  exibeJogadores(jogadores);
  console.log(jogadores);
}
function removerJogador(i) {
  var jogador = jogadores[i]; //chama o array gloabal dentro de uma variavel local na funcao
  jogadornovo.nome = document.getElementById("novojogador").value; //leitura de input

  var remover = jogadores.pop(jogadornovo.nome); //remove objeto criado dentro do array global jogadores
  exibeJogadores(jogadores);
  console.log(jogadores);
}
