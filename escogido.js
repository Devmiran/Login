const lista=document.querySelector('#seleccionar')
const pedidoEscogido=document.querySelector('.container-pedido')
const escogido=document.querySelector('.felicidades')
const aceptar=document.querySelector('#aceptar')


aceptar.addEventListener('click',()=>{
    if (aceptar){
        modal.style.top=0
       escogido.textContent=(seleccionar.options[seleccionar.selectedIndex].text) 
    }
})

cancelar.addEventListener('click', ()=>{
    modal.style.top='-1055px'
    seleccionar.selectedIndex=0
})