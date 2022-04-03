//esta primeira funcao lista as imagens de filmes adicionadas
function adicionarFilme() {
  var campoFilmeFavorito = document.getElementById("filme").value; //faz a leitura da informação de imagem digitada no input de filme

  if (campoFilmeFavorito.endsWith(".jpg" || ".png")) {
    listarFilmesTela(campoFilmeFavorito);
    //verifica se o formato é de imagem e chama segunda função também
  } else {
    //caso o formato nao for jpg ou png exibe erro
    console.error("Formato de imagem inválido");
  }
  document.getElementById("filme").value = ""; //limpa o conteúdo de input
}
//segunda função para listar os filmes adicionados
function listarFilmesTela(filme) {
  var campo2FilmeFavorito = document.getElementById("filmenome").value; //faz a leitura da informação de imagem digitada no input de filme
  var elementoFilmeFavorito = "<img src=" + filme + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito;
  console.log(filme); //informa o filme que foi adicionado
  document.getElementById("filme").value = ""; //limpa o conteúdo de input
  listarFilmesNomes(campo2FilmeFavorito);
}
function listarFilmesNomes(filmenome) {
  var elementoFilmeFavoritoNomes = "<p>" + filmenome + "</p>";
  var elementoListaFilmesNomes = document.getElementById("listaFilmesNomes");
  elementoListaFilmesNomes.innerHTML =
    elementoListaFilmesNomes.innerHTML + elementoFilmeFavoritoNomes;
  console.log(filmenome); //informa o filme que foi adicionado
  document.getElementById("filmenome").value = ""; //limpa o conteúdo de input
}