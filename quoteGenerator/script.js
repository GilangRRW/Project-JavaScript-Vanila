const quoteText = document.querySelector('.quote-text');
const quoteAuthor = document.querySelector('.quote-author');
const button = document.querySelector('.btn');

const displayQuote = ()=>{

    // arrData
    // .then((data) => {
    //     let i = Math.floor(Math.random()*data.length);
    //     const quote = data[i].text;
    //     const author = data[i].author;
    //     quoteText.innerText = quote;
    // quoteAuthor.innerHTML = author;
    // })
    // .catch(err => console.log(err));

    // fetchData()
    //     .then((data) => {
    //         let i = Math.floor(Math.random()*data.length);
    //         const quote = data[i].text;
    //         const author = data[i].author;
    //         quoteText.innerText = quote;
    //         quoteAuthor.innerHTML = author;
    //     });   
    fetch("https://type.fit/api/quotes")
        .then(response => {
            if(!response.ok){
                throw new Error('Cant fetch data');
            }
            return response.json();
        })
        .then(data => {
            let i = Math.floor(Math.random()*data.length);
            const quote = data[i].text;
            const author = data[i].author;
            quoteText.innerText = quote;
            quoteAuthor.innerHTML = author;
        })
        .catch((err) =>{
            console.error("Ada yang error" ,err); 
        });
}

// async function fetchData(){
//     const response = await fetch("https://type.fit/api/quotes");
//     const data = await response.json();
//     return data;
// }
// const arrData = fetchData();
    button.addEventListener('click', ()=>{displayQuote()});


