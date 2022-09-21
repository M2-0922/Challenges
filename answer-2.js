let height = 5;
let lastLine = 9;
let spaceNum = 4;
let row = "";
let midSpace = 1;
for (let i = 0; i < height; i++) {
  if (i === 0) {
    for (let s = 0; s < spaceNum; s++) {
      row = row + " ";
    }
    row = row + "*";
  } else if (i === 4) {
    for (let st = 0; st < lastLine; st++) {
      row = row + "*";
    }
  } else {
    for (let s = 0; s < spaceNum; s++) {
      row = row + " ";
    }
    row = row + "*";
    for (let ms = 0; ms < midSpace; ms++) {
      row = row + " ";
    }
    row = row + "*";
    midSpace = midSpace + 2;
  }
  spaceNum--;
  console.log(row);
  row = "";
}
