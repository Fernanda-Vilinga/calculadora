 const num1=document.getElementById('num1') as HTMLInputElement
 const num2=document.getElementById('num2') as HTMLInputElement
 
 const sum=document.getElementById('sum') as HTMLButtonElement
 const sub=document.getElementById('sub') as  HTMLButtonElement
 const mult=document.getElementById('mult') as HTMLButtonElement
 const div=document.getElementById('div') as HTMLButtonElement

 const res=document.getElementById('res') as HTMLOutputElement

 function addiction( ) {
    let a=parseFloat(num1.value)
    let b=parseFloat(num2.value)
    if (isNaN(a)||isNaN(b)) {
        alert("Não foi possível executar o cálculo ,  deves adicionar os números solicitados")
    } else {
        let result=a+b
    res.textContent=result.toString()
    }
    
 }
sum.addEventListener('click', addiction)
function subtraction() {
    let a =parseFloat(num1.value)
    let b=parseFloat(num2.value)
    if (isNaN(a)|| isNaN(b)) {
        alert("Não foi possível executar o cálculo ,  deves adicionar os números solicitados")
    } else {
        let result=a-b
        res.textContent=result.toString()  
    }
    
}
sub.addEventListener('click' , subtraction)
function multiplication() {
    let a =parseFloat(num1.value)
    let b=parseFloat(num2.value)
    if (isNaN(a)||isNaN(b)) {
        alert("Não foi possível executar o cálculo ,  deves adicionar os números solicitados")
    } else {
        let result=a*b
    res.textContent=result.toString()
    }
    
}
mult.addEventListener('click', multiplication)
function division() {
    let a =parseFloat(num1.value)
    let b =parseFloat(num2.value)
    if (isNaN(a)||isNaN(b)) {
        alert("Não foi possível executar o cálculo ,  deves adicionar os números solicitados")
    } else {
        let result=a/b
    res.textContent=result.toString()
    }
    let result=a/b
    res.textContent=result.toString()
}
div.addEventListener('click',division)