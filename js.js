const deleteAll=document.querySelector('.deleteAll')
const delete1=document.querySelector('.delete')
const numbers=document.querySelectorAll('.numbers')
const display=document.querySelector('.display')
const equal=document.querySelector('.equal')
const operater=document.querySelectorAll('.opraters')
deleteAll.addEventListener('click',function(){
    display.value=''

})
delete1.addEventListener('click',function(){
    let num=display.value
    if(num.length>0){
display.value=num.splice(0,-1)
// from index 0 to unitll index -1 but it is not included 
console.log(num.slice(0,-2)) ;

}
})

numbers.forEach(function(number){
    number.addEventListener("click",function(){
display.value +=number.textContent
    })
})


equal.addEventListener('click',function(){
display.value=eval(display.value)

})
operater.forEach(function(operater){
    operater.addEventListener('click',function(){
        display.value+=operater.textContent
    })
})