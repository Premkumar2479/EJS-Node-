const btns =document.querySelectorAll("button");

for (btn of btns) {
    btn.addEventListiner("click", () => {
        console.log("button was clicked");
    });
}