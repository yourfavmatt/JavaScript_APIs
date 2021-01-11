console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

document.getElementById("submitSearch").addEventListener("click", () => {
  const img = document.querySelector("img");
  const search = document.getElementById("searchWord").value;

  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=54f0MhTKuI2nxwD9nhEvN4ifNwephcpz&s=" +
      search,
    { mode: "cors" }
  )
    .then((response) => response.json())
    .then((res) => {
      img.src = res.data.images.original.url;
    })
    .catch((response) => console.log(response));
});
