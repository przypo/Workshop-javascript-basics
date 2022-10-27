// Process: bootstrap

function main() {
//1. Ustawić domyślną wartość licznika
let counter = 0;


    //2. Po kliknięciu w minus lub plus zmniejszyć
    // lub zwiększyć wartość licznika    
    const $plus = document.querySelector("#plus");
    const $minus = document.querySelector("#minus");
    const $counter = document.querySelector("#counter");
// Refactoring: Extract Function Method
    function renderCounter() {
        $counter.value = counter;
    }
    $plus.addEventListener("click", function () {
        // counter = counter + 1;
        // counter++ ; // inkrementacja postfixowa
        ++counter ; // inkrementacja prefixowa
        renderCounter();
        
    });
    $minus.addEventListener("click", function () {
        // counter = counter - 1;
        --counter
        renderCounter();
})
}

// main()
window.addEventListener('load', main)