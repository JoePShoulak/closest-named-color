// Misc/Math Functions
const loadJson = async path => await fetch(path).then(res => res.json());

const sumOfAbsDiffs = (arr1, arr2) =>
  arr1.reduce((acc, val, i) => acc + Math.abs(val - arr2[i]), 0);

// Color Functions
const parseHex = hex => {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);

  return [r, g, b];
};

const colorDiff = (color1, color2) =>
  sumOfAbsDiffs(parseHex(color1), parseHex(color2));

const closestNamedColor = async color => {
  let closestName = "";
  let closestDiff = 1000;

  const namedColors = await loadJson("./assets/data/colors.json");

  Object.entries(namedColors).forEach(([name, hex]) => {
    let currDiff = colorDiff(hex, color);

    if (currDiff < closestDiff) {
      closestDiff = currDiff;
      closestName = name;
    }
  });

  return { name: closestName, hex: namedColors[closestName] };
};
