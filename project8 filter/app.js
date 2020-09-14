(function(){

    let buttons = document.querySelectorAll('.store-btns button');
    console.log(buttons);
    let items = document.querySelectorAll('.store-items .item');

    buttons.forEach(button => {
        button.addEventListener('click', (e)=>{
            const filter = e.target.dataset.filter;
            items.forEach(item => {
                if(filter == 'all'){
                    item.style.display = 'block';
                }
                else{
                    if(item.classList.contains(filter)){
                        item.style.display = 'block';
                    } else{
                        item.style.display = 'none';
                    }
                }
            });
        })
    });
})();

(function(){
    items = document.querySelectorAll('.store-items .item');
    console.log(document.querySelector('form input'));
    document.querySelector('form input').addEventListener('keyup', (e)=>{
        e.preventDefault();
        text = e.target.value;
        console.log(text)
        items.forEach(item => {
            item.classList.forEach((nameC) =>{
                if(nameC.includes(text)){
                    item.style.display = 'block';
                }else{
                    item.style.display = 'none';
                }
            })
                
        });
    })
})();

