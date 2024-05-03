// KEYDOWN = tecla pressionada
// KEYUP = momento em que a tela sobe dps de pressionada

const inputEl = document.querySelector("input[type=text]");

inputEl.addEventListener("keydown", (event) => {
    console.log("event", `${event.key}` - `${event.keyCode}`)

    if (event.keyCode === 13) {
        alert(`Tecla ENTER pressionada! - ${inputEl.value}`)
    }
});


