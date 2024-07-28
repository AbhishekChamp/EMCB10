// script.js
document.addEventListener("DOMContentLoaded", () => {
    const jokeButton = document.getElementById("get-joke");
    const jokeElement = document.getElementById("joke");

    jokeButton.addEventListener("click", async () => {
        try {
            const response = await fetch("https://v2.jokeapi.dev/joke/Any");
            const data = await response.json();

            if (data.type === "single") {
                jokeElement.textContent = data.joke;
            } else if (data.type === "twopart") {
                jokeElement.textContent = `${data.setup} - ${data.delivery}`;
            }
        } catch (error) {
            jokeElement.textContent =
                "Sorry, something went wrong. Please try again.";
            console.error("Error fetching joke:", error);
        }
    });
});
