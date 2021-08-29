const lodeQuotes=()=>{
               fetch('https://api.kanye.rest/')
               .then(res=>res.json())
               .then(data=>displayQuote(data))
}
lodeQuotes();

const displayQuote=(quote)=>{
               const blockqoute=document.getElementById('quotes');
               blockqoute.innerHTML=quote.quote;
               
}


