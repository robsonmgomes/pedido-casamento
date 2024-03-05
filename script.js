function sim() {
  alert("Você aceitou se casar comigo! TE AMO! :)");
  location.href = "main.html";
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