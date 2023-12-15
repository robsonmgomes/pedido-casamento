function sim() {
  alert("Você aceitou se casar comigo! TE AMO! :)");
  // redireciona para um URL após clicar no SIM
  //location.href = "https://cdn.drawception.com/images/panels/2017/3-19/be7269N5Tc-2.png";
  location.href = "image.jpeg";
}

function desvia(btn) {
  // btn declarado na função
  btn.style.position = 'absolute';
  btn.style.bottom = geraPosicao(10, 90);
  btn.style.left = geraPosicao(10, 90);
  console.log('opa, desviei...');
}

function geraPosicao(min, max) {
  return (Math.random() * (max - min) + min) + "%";
}