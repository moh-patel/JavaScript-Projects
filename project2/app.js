document.getElementById('change').addEventListener('click', generateHex);

function generateHex(){
    
    let hexColor = '#';
    for(let i=0; i<3; i++)
        hexColor+=Math.floor(Math.random() * 256).toString(16).toUpperCase().padStart(2, '0');

    console.log(hexColor);
    
    document.body.style.backgroundColor = hexColor;
}