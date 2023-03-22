// Input Elements
const colorPicker = document.getElementById("color-input");
const chosenColor = document.getElementById("chosen-color");

// Output Elements
const outputDiv = document.getElementById("found-color-div");
const outputSpan = document.getElementById("found-color-span");

// Choose a color
const chooseColor = () => (chosenColor.innerHTML = colorPicker.value);

// Display the found color
const displayColor = color => {
  outputHex.innerHTML = `${color.hex}: ${color.name}`;
  outputDiv.style.backgroundColor = color.hex;
  outputDiv.style.borderColor = color.hex;
};

// The meat and potatoes
const runScript = () => closestNamedColor(colorPicker.value).then(displayColor);
