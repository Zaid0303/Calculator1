function add(){
    let num1=document.getElementById("f-number").value
    let num2=document.getElementById("s-number").value
    let result= parseFloat(num1)+parseFloat(num2)
    document.getElementById("final-result").innerHTML=result
}
function sub(){
    let num1=document.getElementById("f-number").value
    let num2=document.getElementById("s-number").value
    let result= parseFloat(num1)-parseFloat(num2)
    document.getElementById("final-result").innerHTML=result
}
function mul(){
    let num1=document.getElementById("f-number").value
    let num2=document.getElementById("s-number").value
    let result= parseFloat(num1)*parseFloat(num2)
    document.getElementById("final-result").innerHTML=result
}
function div(){
    let num1=document.getElementById("f-number").value
    let num2=document.getElementById("s-number").value
    let result= parseFloat(num1)/parseFloat(num2)
    document.getElementById("final-result").innerHTML=result
}