function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  var valorEmReal = valorEmDolarNumerico * 5;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido"); //pega a referencia html e cria uma variavel relacionada a ela em JS
  var valorConvertido = "O resultado em real é R$" + valorEmReal;

  elementoValorConvertido.innerHTML = valorConvertido; //joga o valor dentro do html naquela referencia que ja existia
}