// User Story
// 1. Użytkownik wprowadza text do 
// dowolnej kontrolki sekcji Input, dzięki czemu
// do pasującej kontrolki w sekcji Output
// jest wpisywana ta sama wartość

// --

// 1. Spr. czy w dowolnej kontrolce
// w sekcji Input, jest text, jeśli jest to
// go przekopiuj do "pasującej" kontrolki
// w sekcji Output

//const a = 1;
//let b = 2;
//var c = 3;
const input1 = document.querySelector('#input-1');
const input2 = document.querySelector('#input-2');
const output1 = document.querySelector('#output-1');
const output2 = document.querySelector('#output-2');

input1.addEventListener('keyup', function () {
    output1.value = input1.value;
});
input2.addEventListener('keyup', function () {
    output2.value = input2.value;
});