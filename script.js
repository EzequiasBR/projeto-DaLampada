let btn = document.getElementById("clicker");
let lamb = document.getElementById("lamb");

btn.onclick = ()=>{
   if(btn.value === "Acender"){
     lamb.src = './img/acesa.png';
     btn.value = 'Apagar';
     btn.innerText = 'Apagar';
   }else{
     lamb.src = './img/apagada.png';
     btn.value = 'Acender';
     btn.innerText = 'Acender';
   }
}