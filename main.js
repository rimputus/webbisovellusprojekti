document.getElementById("myButton").onclick = function() {
    alert("Button clicked!");
};

document.getElementById("myParagraph").addEventListener("click", function() {
    this.textContent = "You clicked me!";
});

const animals = ["furry", "dog", "cat"];
function showAnimals() {
    alert(animals.join(", "));
}
showAnimals();  

setTimeout(() => {
    alert("This message appears after 2 seconds");
}, 2000);

function fetchJoke() {
    fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())
        .then(data => {
            document.getElementById("jokeContainer").innerText = data.value;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            document.getElementById("jokeContainer").innerText = "Sorry, could not fetch a joke at this time.";
        });
}
