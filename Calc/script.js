console.log('ssss')
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
// const operation=(value)=>{
//     let input_1=document.getElementById('input').innerText
//     document.getElementById('input').value=0;
    
//     console.log(document.getElementById('input').value)
// } 
const equalClick=()=>{
    let exp=document.querySelector(".input-all").innerText
    result=eval(exp)
   document.querySelector('.input-all').innerHTML=result
}