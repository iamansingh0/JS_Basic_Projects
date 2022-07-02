let count = 0;
const counter = document.querySelector("#count");
const info = document.querySelector(".para");
const result = document.getElementById("result");

// increament the count variable whenever the button is clicked

function increament() {
    count++;
    counter.innerHTML = count;
    info.style.visibility = "hidden";
}

// create a function save(), which logs out the count when it's called

function save() {
    result.innerHTML = count;
    count = 0;
    counter.innerHTML = count;
    info.style.visibility = "visible";
}