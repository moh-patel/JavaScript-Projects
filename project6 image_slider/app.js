(function(){
    let container = document.querySelector('#container');
    let index = 0;
    let images = ['car-0', 'car-1', 'car-2', 'car-3', 'car-4'];
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function(){
            if(button.id == 'next'){
                index = (index + 1) % 5;
            }else{
                index = index-1;
                if(index == -1){
                    index = 4;
                }
            }
            container.style.backgroundImage = `url('images/${images[index]}.jpeg')`;
        });
    });
    
})();
