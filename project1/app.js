let colors = ['red', 'blue', 'green', 'violet'];

document.getElementById('change').addEventListener("click", changeColor);


function changeColor(){
    let i = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[i];
}
document.getElementById('change').style.backgroundColor = 'grey';