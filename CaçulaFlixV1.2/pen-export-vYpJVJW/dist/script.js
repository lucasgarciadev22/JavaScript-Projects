//esta primeira funcao lista as imagens de filmes adicionadas
var listaNome = [];
var listaImg = [];
var campoNomeFilme = document.getElementById("filmenome").value; //faz a leitura da informação de imagem digitada no input de filme
var campoImgFilme = document.getElementById("filme").value; //faz a leitura da informação de imagem digitada no input de filme
var erroExibir = document.getElementById("erro");
function adicionarFilme() {
  var campoNomeFilme = document.getElementById("filmenome").value; //faz a leitura da informação de imagem digitada no input de filme
  var campoImgFilme = document.getElementById("filme").value; //faz a leitura da informação de imagem digitada no input de filme

  if (listaNome.toLowerCase === campoNomeFilme.toLowerCase) {
    erroExibir.innerHTML = "Este filme já foi adicionado";
  } else if (campoImgFilme.endsWith(".jpg" || ".png")) {
    listarFilmesTela(campoNomeFilme, campoImgFilme); //carrega os argumentos nome e imagem de filme na função e chama ela
  }
  //verifica se o formato é de imagem e chama segunda função também
  else {
    //caso o formato nao for jpg ou png exibe erro

    erroExibir.innerHTML = "Formato de imagem inválido";
  }
  document.getElementById("filmenome").value = ""; //limpa o conteúdo de input
  document.getElementById("filme").value = ""; //limpa o conteúdo de input
}
//segunda função para listar os filmes adicionados
function listarFilmesTela(campoNomeFilme, campoImgFilme) {
  erroExibir.innerHTML = "";
  listaNome.push(campoNomeFilme);
  listaImg.push(campoImgFilme);

  var elementoFilmeFavorito =
    "<div class=cardFilme>" +
    `<p class="labelFilme">${campoNomeFilme}</p>` +
    "<img src=" +
    campoImgFilme +
    ">" +
    "<button class='removerFilme'onClick='removerFilme(this)'>Apagar</button></div></div>";
  var elementoListar = document.getElementById("listaFilmes");
  elementoListar.innerHTML += elementoFilmeFavorito;
  // var elementoListaFilmes = document.getElementById("listaFilmes");
  // elementoListaFilmes.innerHTML =
  //  elementoListaFilmes.innerHTML + elementoFilmeFavorito;
  //console.log(filme); //informa o filme que foi adicionado
  //document.getElementById("filme").value = ""; //limpa o conteúdo de input
  // listarFilmesNomes(campo2FilmeFavorito);
  //}
  //function listarFilmesNomes(filmenome) {
  // var elementoFilmeFavoritoNomes = "<p>" + filmenome + "</p>";
  // var elementoListaFilmesNomes = document.getElementById("listaFilmesNomes");
  // elementoListaFilmesNomes.innerHTML =
  //   elementoListaFilmesNomes.innerHTML + elementoFilmeFavoritoNomes;
  // console.log(filmenome); //informa o filme que foi adicionado
  //document.getElementById("filmenome").value = ""; //limpa o conteúdo de input
}
function removerFilme(apagarFilme) {
  listaNome.pop(campoNomeFilme);
  listaImg.pop(campoImgFilme);
  apagarFilme.parentElement.remove();
}