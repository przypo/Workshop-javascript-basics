const jedynka = [
  1,
  2,
  3,
  3,
  4,
  4,
  5,
  6,
  7,
  7,
  7,
  8,
  8,
  8,
  8,
  8,
  8,
  "a",
  "a",
  "a",
  "b",
  "c",
  "d",
  "d",
  "d",
  "d",
  "d",
  "e",
  "e",
  "f",
];
// Funkcja, która będzie zwracała tablicę z unikalnymi elementami

function printUniqList(list) {
  const wyjsciowa = [];
  list.forEach((element) => {
    if (!wyjsciowa.includes(element)) wyjsciowa.push(element);
  });
  console.log(wyjsciowa);
}

printUniqList(jedynka);

const dwojka = ["A", "n", "n", "a"];
printUniqList(dwojka);
