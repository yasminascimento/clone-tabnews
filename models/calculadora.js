function somar(numero1, numero2) {
  if (typeof numero1 !== "number") {
    return "ERRO";
  }
  return numero1 + numero2;
}

exports.somar = somar;
