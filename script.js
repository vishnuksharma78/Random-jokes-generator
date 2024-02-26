
const jokeContainer = document.getElementById("jokes");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
    jokeContainer.classList.remove("clist");
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        jokeContainer.textContent = `${item.joke}`;
        jokeContainer.classList.add("clist");
    });
}
btn.addEventListener("click",getJoke);
getJoke();