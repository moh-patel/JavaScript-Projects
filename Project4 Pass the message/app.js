(function(){
    document.querySelector('button').addEventListener('click', function(){
        let value = document.querySelector('input').value;
        console.log(value);
        let container = document.querySelector('#container');
        console.log(container);
        if(value == ''){
            let newEle = document.createElement('p');
            container.insertBefore(newEle, container.querySelector('p'));
            newEle.innerHTML = 'Please insert a value';
            newEle.style.color = '#DC143C';
            newEle.style.backgroundColor = '#FAD5D5';
            newEle.style.borderColor = '#CD5C5C'
            newEle.style.fontSize = '1rem';
            newEle.style.margin = '20px'
            newEle.style.padding = '10px';
            container.style.height = '40%';

            setTimeout(function(){
               container.querySelector('p').remove();
               container.style.height = '30%'
            },2000)

        }else{
            document.getElementById('passed_message').innerHTML =  value;
            document.querySelector('input').value = '';
        }
        
    } );
})();
