const buttons = document.querySelectorAll('.btn');
const number = document.getElementById('num');
    let index = 0;
buttons.forEach(button=>{
    button.addEventListener('click',function(e){
      
  
  
    if(button.classList.contains('Decrease')){
        index --
    }
    else if(button.classList.contains('Increase')){
        index ++
    }
    else{
        index = 0
    }
   number.innerHTML = index;
        if(index === 0){
        number.style.color='black'}
   else if(index >0){
        number.style.color ='green'
    }
    else if(index < 0){
        number.style.color='red'
    }
  
    })
})


