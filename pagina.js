const pedir=document.querySelector('#pedir')
const lista=document.querySelector('#seleccionar')
const modal=document.querySelector('.modal')
const escogido=document.querySelector('#producto-escogido')
const cancelar=document.querySelector('#cancelar')

pedir.addEventListener('click',()=>{
    if(seleccionar.options[seleccionar.selectedIndex].value==='1'){  
  alert('No has escogido nada')
    }else {
        modal.style.top=0
       escogido.textContent=(seleccionar.options[seleccionar.selectedIndex].text) 
    }
})

cancelar.addEventListener('click', ()=>{
    modal.style.top='-1055px'
    seleccionar.selectedIndex=0
})