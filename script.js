window.onload = () => {
    setTimeout(() => {
        document.querySelector("body").classList.add("display");
    }, 3000);
};



// // function mouseClick(mouseCursor) {
// //     linkShrink
// // }

// function cursor(e) {
//     mouseCursor.style.top = e.pageY + "px";
//     mouseCursor.style.left = e.pageX + "px";
// }

// navLinks.forEach(link => {
//     link.addEventListener("mouseleave", () => {
//         mouseCursor.classList.remove("link-grow");
//         link.classList.remove("hovered-link");
//     });
//     link.addEventListener("mouseover", () => {
//         mouseCursor.classList.add("link-grow");
//         link.classList.add("hovered-link");
//         //         link.classList.add("link-shrink");
//     });
// });