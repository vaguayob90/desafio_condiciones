document.getElementById("ingresar").addEventListener("click", () => {
  const d1 = document.getElementById("d1").value;
  const d2 = document.getElementById("d2").value;
  const d3 = document.getElementById("d3").value;
  const password = d1 + d2 + d3;
  const mensaje = document.getElementById("mensaje");

  if (password === "911") {
    mensaje.textContent = "Password 1 correcto";
  } else if (password === "714") {
    mensaje.textContent = "Password 2 correcto";
  } else {
    mensaje.textContent = "Password incorrecto";
  }
});