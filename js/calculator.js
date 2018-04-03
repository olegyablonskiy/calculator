const display = document.getElementById("display");

document.querySelectorAll(".calcBtn")
    .forEach(function(el) {
        el.addEventListener('click', function(){
            math(el.value);
        });
    });

function math(val) {
    display.value += val;
}

function getResult() {
    const result = eval(display.value);
    display.value = result;
}

function displayAc() {
        display.value = "";
}
