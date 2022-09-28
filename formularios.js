const boton=document.getElementById('ingresar')
boton.addEventListener('click', e=>{
    e.preventDefault()
    const username=document.getElementById('username').value
    const passaword=document.getElementById('passaword').value

    if(username==='' || passaword==='' ){
        alert ('ERROR!! NO SE HA INGRESADO DATOS')
        }

    if(username==='carlos' && passaword==='123456'){    
        document.body.style.background="purple"
        alert('BIENVENIDO')
       setTimeout(()=>{
            location="./nosotros.html"
        },1000) 
    }else{
        document.querySelector('#mensaje').style.display='block'
        setTimeout(()=>{
            document.querySelector('#mensaje').style.display='none'
        },3000)

    }



/* document.getElementById('passaword').addEventListener('mouseenter',mostrar)

function mostrar(){
    document.getElementById('passaword').type='text'
}

document.getElementById('passaword').addEventListener('mouseleave', ocultar)

function ocultar(){
    document.getElementById('passaword').type='passaword'
}

document.getElementById('rememberme').addEventListener('change', function(z)){
if (z.target.checked==true){
    alert('Desea recordar')
}
} */

})