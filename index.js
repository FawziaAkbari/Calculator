const getNumbers = document.getElementById("outputCalculate");

function display(number) {
    getNumbers.value += number
}

function Calculate() {
    try {
        getNumbers.value = eval(getNumbers.value);
    }

    catch(err) {
        alert("Error for Two Signs!")
    }
}

function clear() {
    getNumbers.value = "";
}

function deletes() {
    getNumbers.value = getNumbers.value.slice(0, -1)
}

