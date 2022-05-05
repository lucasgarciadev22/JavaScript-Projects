var numeroSecreto = parseInt(Math.random() * 11);//armazena numero aleatorio
let chances=3;//comeca com 3 tentativas
var elementoContador = document.getElementById("contador");
    var contagem = "Você tem " + chances + " chances restantes.";
    elementoContador.innerHTML = contagem;//imprime o numero de tentativas
    function Chutar() {//inicia contagem de tentativas cada vez que clica em chutar
    var elementoContador = document.getElementById("contador");
    var contagem = "Você tem " + chances + " chances restantes.";
    elementoContador.innerHTML = contagem;//imprime o numero de tentativas
    var elementoResultado = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);
    console.log(chute);
    if (chute == numeroSecreto && chances>0) {
      //condicao caso o usuario adivinhe o numero secreto
      elementoResultado.innerHTML = "Você acertou";
      console.log("Acertou!");
    }
      //alerta o usuario caso o numero digitado esteja fora do intervalo de 0 a 10 
      else if (chute > 10 || chute < 0){
      if(chances>0){
      chances--;
      elementoContador.innerHTML = contagem;
      elementoResultado.innerHTML = "Digite um número de 0 a 10";
      console.log("Digite um número de 0 a 10");//imprime o resultado 
    }
    }
      //da uma dica pro usuario se o numero secreto é maior ou menor
      else if (chute > numeroSecreto && chances>0) {
      chances--;
      elementoContador.innerHTML = contagem;
      elementoResultado.innerHTML = "O número secreto é menor..."
    }
      else if (chute < numeroSecreto && chances>0) {
      chances--;
      elementoContador.innerHTML = contagem;
      elementoResultado.innerHTML = "O número secreto é maior...";
    }
  else if (chances==0){
  elementoContador.innerHTML = contagem;
  elementoResultado.innerHTML = "Acabaram suas chances,tente novamente...";
  console.log("Acabaram suas chances,tente novamente...");
    }
    }