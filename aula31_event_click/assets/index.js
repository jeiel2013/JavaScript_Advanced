const button = document.querySelector("button");
button.addEventListener("click", () => {
    console.log("Clicou no botão");
})

const a = document.querySelector("a");
a.addEventListener("click", (event) => {
    event.preventDefault(); // elemento não faz do comportamento padrão dele
    console.log("Clicou no hyperlink");
})