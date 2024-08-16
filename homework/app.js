// let btns = document.querySelectorAll("button");

// // btn.onclick = function () {
// //     console.log("button was clicked");
// // }

// for ( btn of btns ) {
//    // btn.onclick = sayhello;
// btn.addEventListener("click",sayhello);
// }

// function sayhello () {
//     alert("hello");
// }
// // btn.onclick = sayhello;



let btn = document.querySelector("button");

btn.addEventListener("click", function ( ) {
    //console.log("generate random color");
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerHTML = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;
    console.log("color updated");
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 225);
    let green = Math.floor(Math.random() * 225);
    let blue = Math.floor(Math.random() * 225);

    let color = `rgb(${red},${green},${blue})`
    return color;
}