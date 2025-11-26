let fonts = [
    "Poppins",
    "Inter",
    "Arial Black",
    "Courier New",
    "Trebuchet MS",
    "Montserrat"
];

let index = 0;

function changeFont() {
    const text = document.getElementById("welcomeText");

    text.style.opacity = 0;

    setTimeout(() => {
        text.style.fontFamily = fonts[index];
        text.style.opacity = 1;
    }, 400);

    index = (index + 1) % fonts.length;
}

setInterval(changeFont, 3000);

// Button animation event
function startEffect() {
    alert("Animation Button Clicked!");
}
