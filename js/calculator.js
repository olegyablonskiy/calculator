function basic(operation, value1, value2) {
    return eval(value1 + operation + value2);
}

document.querySelectorAll('#buttons button')
    .forEach(function () {
    let current = $(this).attr('value');
    $(this).text(current);

