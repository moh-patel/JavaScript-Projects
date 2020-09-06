(function(){
    let counter = document.querySelector('#counter');
    let value = counter.textContent;
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function(){
            if(button.id == 'subtract'){
                value = value - 1;
            }else{
                value = value + 1;
            }
            
            counter.textContent = value;
            if(value>0){
                counter.style.color = 'green';
            }else if(value<0){
                counter.style.color = 'red';
            }else{
                counter.style.color = '#333333'
            }
        });
    });
    
})();
