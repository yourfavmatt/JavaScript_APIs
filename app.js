console.log("Hello World!\n==========\n");


let form = Documment.querySelector("#searchForm");
let searchInput = Documment.querySelector("#gifSearch");
let img = Documment.querySelector("img");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    getGif();

});


function getGif() {
    fetch(
        `https://api.giphy.com/v1/gifs/translate?api_keys=${API_KEY}&s=${searchInput.value}1`
    )
    .then((res) => {
        return res.json();

    })
    .then((body) => {
        console.log(body);
        img.src = body.data.images.original.url;
        if (body.data.user && body.data.user.username) {
            img.alt = `${body.data.title} by ${body.data.user.username}`;
            img.title = `${body.data.title} by ${body.data.user.username}`;

        }
    })
    .catch((err) => {
        console.error(err);
    })
}   
    



  
  
  
  
  
  

console.log("EXERCISE 1:\n==========\n");
