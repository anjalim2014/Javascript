
const clicked=(value)=>{
    document.querySelector('.input-all').innerHTML+=value
    document.getElementById('input').innerHTML+=value

   if(value=='+'||'-'||'*'||'/'){
    document.getElementById("input").innerHTML=null
   }
   
}
const clearDisplay=()=>{
    document.getElementById('input').innerHTML=null
    document.querySelector('.input-all').innerHTML=null
}
const equalClick=()=>{
    let exp=document.querySelector(".input-all").innerText
    result=eval(exp)
   document.querySelector('.input-all').innerHTML=result
}
