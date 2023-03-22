/* == MISC/MATH FUNCTIONS == */
// Load a JSON file and return the parsed JSON in one handy function
const loadJson = async path => await fetch(path).then(res => res.json());

// Returns the sum of the absolute values of the differences
// in corresponding elements in a pair of arrays
const sumOfAbsDiffs = (arr1, arr2) =>
  arr1.reduce((acc, val, i) => acc + Math.abs(val - arr2[i]), 0);

/* == COLOR FUNCTIONS == */
// Parse a hex code ('#123456') into pairs ([12, 34, 56])
const parseHex = hex => {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);

  return [r, g, b];
};

// Find the differences between two colors as a discrete integer difference
const colorDiff = (color1, color2) =>
  sumOfAbsDiffs(parseHex(color1), parseHex(color2));

// Find the closest named color
const closestNamedColor = async color => {
  let closestName = "";
  let closestDiff = 1000;

  // Load in the named colors
  const namedColors = await loadJson("./assets/data/colors.json");

  // Manually reduce the list of named colors to the closest named color
  Object.entries(namedColors).forEach(([name, hex]) => {
    let currDiff = colorDiff(hex, color);

    if (currDiff < closestDiff) {
      closestDiff = currDiff;
      closestName = name;
    }
  });

  return { name: closestName, hex: namedColors[closestName] };
};
