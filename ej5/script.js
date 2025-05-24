function verArea() {
  let ladoA = parseFloat(document.getElementById("lado1").value);
  let ladoC = parseFloat(document.getElementById("lado2").value);
  let base = parseFloat(document.getElementById("altura").value);

  if (ladoA && ladoC && base && ladoA > 0 && ladoC > 0 && base > 0) {
    let resultado = ((ladoA + ladoC) / 2) * base;
    alert("Superficie: " + resultado.toFixed(2) + " m²");
  } else {
    alert("Completá todos los campos con valores válidos.");
  }
}
