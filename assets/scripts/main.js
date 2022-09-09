function chooseColor() {
    let color = document.getElementById("color-input").value;

    console.log(color);
    document.getElementById("chosen-color").innerHTML=color;
  }

function differenceBewteenColors(color1, color2) {
    let r1 = parseInt(color1.slice(1,3), 16);
    let g1 = parseInt(color1.slice(3,5), 16);
    let b1 = parseInt(color1.slice(5,7), 16);

    let r2 = parseInt(color2.slice(1,3), 16);
    let g2 = parseInt(color2.slice(3,5), 16);
    let b2 = parseInt(color2.slice(5,7), 16);

    let rDiff = Math.abs(r1 - r2);
    let gDiff = Math.abs(g1 - g2);
    let bDiff = Math.abs(b1 - b2);

    let totalDiff = rDiff + gDiff + bDiff;

    return totalDiff;

}

function findClosestColor() {
    let color = document.getElementById("color-input").value;

    let closestColorName = "";
    let closestColorHex = "";
    let closestColorDiff = 255*3;

    namedColors.forEach(i => {
        let currentColorDiff = differenceBewteenColors(i[1], color);

        if (currentColorDiff < closestColorDiff) {
            closestColorDiff = currentColorDiff;
            closestColorName = i[0];
            closestColorHex = i[1];
        }
    });

    document.getElementById("found-color-hex").innerHTML = closestColorHex;
    document.getElementById("found-color-name").innerHTML = closestColorName;
    document.getElementById("found-color").style.backgroundColor = closestColorHex;
}




