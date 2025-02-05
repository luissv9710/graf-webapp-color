// Seleccionar los elementos del DOM
const redSlider = document.getElementById("redRange");
const greenSlider = document.getElementById("greenRange");
const blueSlider = document.getElementById("blueRange");

const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");

const colorBox = document.getElementById("colorBox");
const hexCode = document.getElementById("hexCode");

// Función para actualizar el color
function updateColor() {
    let red = parseInt(redSlider.value);
    let green = parseInt(greenSlider.value);
    let blue = parseInt(blueSlider.value);

    // Convertir a código hexadecimal
    let hex = `#${red.toString(16).padStart(2, "0")}${green.toString(16).padStart(2, "0")}${blue.toString(16).padStart(2, "0")}`.toUpperCase();

    // Aplicar el color al recuadro
    colorBox.style.backgroundColor = hex;
    hexCode.textContent = hex;

    // Sincronizar inputs con sliders
    redInput.value = red;
    greenInput.value = green;
    blueInput.value = blue;
}

// Función para actualizar sliders cuando se escribe en los inputs
function updateSlidersFromInput() {
    let red = Math.min(255, Math.max(0, parseInt(redInput.value) || 0));
    let green = Math.min(255, Math.max(0, parseInt(greenInput.value) || 0));
    let blue = Math.min(255, Math.max(0, parseInt(blueInput.value) || 0));

    redSlider.value = red;
    greenSlider.value = green;
    blueSlider.value = blue;

    updateColor();
}

// Eventos para los sliders
redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);

// Eventos para los inputs numéricos
redInput.addEventListener("input", updateSlidersFromInput);
greenInput.addEventListener("input", updateSlidersFromInput);
blueInput.addEventListener("input", updateSlidersFromInput);

// Inicializar el color al cargar la página
updateColor();