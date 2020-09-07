function Testimony(name, picture, text){
    this.name = name;
    this.picture = picture;
    this.text = text;
}

let testimonies = [];
testimonies.push(
    new Testimony('Jhon', 'customer-0', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?'),
    new Testimony('Sandy', 'customer-1', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock'),
    new Testimony('Amy', 'customer-2', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock'),
    new Testimony('Tyrell', 'customer-3', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'),
    new Testimony('Wanda', 'customer-4', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')
    );

(function(){
    //use of bubbling
    let counter = 0;
    let container = document.querySelectorAll('button').forEach(button =>{
        button.addEventListener('click', (e) => {
            if(e.target.id == 'next'){
                counter= (counter+1) % (testimonies.length -1);
            }else{
                counter --;
                if(counter == -1)
                    counter = testimonies.length -1;
            }
            document.querySelector('#name').textContent = testimonies[counter].name;
            document.querySelector('img').src = `images/${testimonies[counter].picture}.jpg`;
            document.querySelector('p').textContent = testimonies[counter].text;

        })
    });
    
})();