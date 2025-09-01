const imagen = document.querySelector('#imagen_a_trabajar')
let puedoModificar = true

imagen.addEventListener('click' , function(e) {
  if  (puedoModificar) {
    e.target.style.borderRadius= '50%'
    e.target.style.border= '2px solid red'
    puedoModificar = false
  } else {
    e.target.style.borderRadius= '0%'
    e.target.style.border= 'none'
    puedoModificar = true
  } 
})

