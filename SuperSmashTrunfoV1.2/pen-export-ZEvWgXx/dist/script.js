//este array contém objeto carta1 e um subobjeto de 'atributos'

var carta1 = {
  nome: "Mario",
  imagem: "https://i.imgur.com/mxrV9Uz.png",
  atributos: { ATAQUE: 4, DEFESA: 3, AGILIDADE: 5 }
};
var carta2 = {
  nome: "Link",
  imagem:
    "https://i.pinimg.com/originals/aa/84/aa/aa84aac617b49d254e44d5e0b8d193d3.jpg",
  atributos: { ATAQUE: 7, DEFESA: 5, AGILIDADE: 6 }
};
var carta3 = {
  nome: "Samus",
  imagem:
    "https://nintendoeverything.com/wp-content/uploads/sites/1/nggallery/metroid-samus-returns-8617/metroid-samus-returns_1.jpg",
  atributos: { ATAQUE: 10, DEFESA: 5, AGILIDADE: 5 }
};
var cartaMaquina;
var cartaJogador;
var cartas = [carta1, carta2, carta3];
//função que sorteia as cartas do jogador e da máquina (uma para cada)
function sortearCarta() {
  var escolheCartaMaquina = parseInt(Math.random() * 3); //randomiza com mathrandom e transforma em int
  cartaMaquina = cartas[escolheCartaMaquina]; //o resultado randomizado é inserido na variável de carta da máquina

  var escolheCartaJogador = parseInt(Math.random() * 3); //randomiza com mathrandom e transforma em int
  while (escolheCartaJogador == escolheCartaMaquina) {
    //repete o sorteio até as cartas serem diferentes
    var escolheCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[escolheCartaJogador]; //o resultado randomizado é inserido na variável de carta de jogador
  console.log(cartaMaquina);
  console.log(cartaJogador);
  document.getElementById("btnSortear").disabled = true; //desabilita o botão Sortear Carta
  document.getElementById("btnJogar").disabled = false; //habilita o botão jogar após ter feito o sorteio

  obtemAtributoSelecionado();
  exibirCartaJogador();
  esconderCartaMaquina(); //chama função de exibir opções na tela
}
//function exibeOpcoes() {
// var opcoes = document.getElementById("opcoes");
// var opcoesSelect = "";
//for (var atributo in cartaJogador.atributos) {
//insere os valores dentro do subobjeto atributos na variavel 'atributo'
//opcoesSelect +=
// "<input type='radio' name='atributo' value='" +
// atributo +
// "'>" +
// atributo; //adiciona um input radio button + nome do atributo no sintax highlight da tag
//opcoes.innerHTML = opcoesSelect; //escreve os radio buttons no html
//console.log(atributo);
function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Venceu</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Perdeu</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnSortear").disabled = false;

  exibirCartaMaquina();
}
//funcao para listar as cartas na tela
function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador"); //insere nesta tag os valores de didCartaJogador
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`; //insere a imagem dentro da backgroundImage do CSS na tag carta-jogador
  //divCartaJogador.style.backgroundImage="url("+cartaJogador.imagem+")" --- outro método  de escrever

  //criação de variaveis para tags das cartas
  var moldura =
    '<img src="https://i.imgur.com/QX4JCWo.png" style=" width: inherit; height: inherit; position: absolute;">'; //TROCAR
  var tagOpcoes = "<div id= 'opcoes' class= 'carta-status'>"; //status a serem exibidos na carta
  var opcoesSelect = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesSelect +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`; //escreve no html o nome e altera css

  //escreve todas as informações da carta formatada no HTML
  divCartaJogador.innerHTML =
    moldura + nome + tagOpcoes + opcoesSelect + "</div>";
}
function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina"); //insere nesta tag os valores de didCartaJogador
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`; //insere a imagem dentro da backgroundImage do CSS na tag carta-jogador
  //divCartaJogador.style.backgroundImage="url("+cartaMaquina.imagem+")" --- outro método  de escrever

  //criação de variaveis para tags das cartas
  var moldura =
    '<img src="https://i.imgur.com/QX4JCWo.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagOpcoes = "<div id= 'opcoes' class= 'carta-status'>"; //status a serem exibidos na carta
  var opcoesSelect = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesSelect +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`; //escreve no html o nome e altera css

  //escreve todas as informações da carta formatada no HTML
  divCartaMaquina.innerHTML =
    moldura + nome + tagOpcoes + opcoesSelect + "</div>";
}
function esconderCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina"); //insere nesta tag os valores de didCartaJogador
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`; //insere a imagem dentro da backgroundImage do CSS na tag carta-jogador
  //divCartaJogador.style.backgroundImage="url("+cartaMaquina.imagem+")" --- outro método  de escrever

  //criação de variaveis para tags das cartas
  var moldura =
    '<img src="https://i.imgur.com/5Q3jPYc.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaMaquina.innerHTML = moldura;
}