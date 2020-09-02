let quotes = [
    {
        quote: 'Sometimes you will never know the value of a moment until it becomes a memory',
        author: 'DR.SEUSS'
    },
    {
        quote: 'It is also charity to utter a good word',
        author: 'Prophet Muhammad PBUH'
    },
    {
        quote: 'The way to get started is to quit talking and begin doing',
        author: 'Walt Disney'
    },
    {
        quote: 'Tomorrow is the first blank page of a 365 page book',
        author: 'Brad Paisley'
    }
];

document.querySelector('button').addEventListener('click', getQuote);

function getQuote(){
    let quoteNumber = Math.floor(Math.random() * quotes.length);
    console.log(document.querySelector('p').childNodes)
    document.querySelector('p').childNodes[2].textContent = quotes[quoteNumber].quote;
    document.querySelector('h5').innerHTML = quotes[quoteNumber].author;
}