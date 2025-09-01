document.querySelector('#verificar').addEventListener('click', function() {
  const inputSticker1 = document.querySelector('#sticker1')
  const inputSticker2 = document.querySelector('#sticker2')
  const inputSticker3 = document.querySelector('#sticker3')
  const resultado = document.querySelector('#resultado')

  const total = Number(inputSticker1.value) + Number(inputSticker2.value) + Number(inputSticker3.value)

  if (total <= 10) {
    resultado.innerHTML = `llevas ${total} sticker s`
  } else {
    resultado.innerHTML = 'llevas demasiados stickers'
  }
}) 