const loadJson = async path => await fetch(path).then(res => res.json());

const parseHex = hex => {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);

  return [r, g, b];
};

const differenceBewteenColors = (color1, color2) => {
  let [r1, b1, g1] = parseHex(color1);
  let [r2, b2, g2] = parseHex(color2);

  let dR = Math.abs(r1 - r2);
  let dG = Math.abs(g1 - g2);
  let dB = Math.abs(b1 - b2);

  return dR + dG + dB;
};

const findClosestColor = async color => {
  let closestName = "";
  let closestDiff = 1000;

  const namedColors = await loadJson("./assets/data/namedColors.json");

  Object.entries(namedColors).forEach(([name, hex]) => {
    let currentDiff = differenceBewteenColors(hex, color);

    if (currentDiff < closestDiff) {
      closestDiff = currentDiff;
      closestName = name;
    }
  });

  return { name: closestName, hex: namedColors[closestName] };
};
