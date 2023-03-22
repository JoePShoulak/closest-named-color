const colorPicker = document.getElementById("color-input");
const chosenColor = document.getElementById("chosen-color");

const outputDiv = document.getElementById("found-color");
const outputName = document.getElementById("found-color-name");
const outputHex = document.getElementById("found-color-hex");

const chooseColor = () => (chosenColor.innerHTML = colorPicker.value);

const runScript = () => {
  findClosestColor(colorPicker.value).then(closest => {
    outputHex.innerHTML = closest.hex;
    outputName.innerHTML = closest.name;
    outputDiv.style.backgroundColor = closest.hex;
  });
};
