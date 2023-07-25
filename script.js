const hero = document.querySelector(".hero");
const text = document.getElementById("text");
const movement = 500 // 500px   how spaces spread this shadow on window.

// Shadow function
function shadow(e){
    const {offsetWidth: width, offsetHeight: height} = hero; // destructing hero width, height
    let {offsetX: X, offsetY: Y} = e; // destructing parameter e by X, Y

    if (this !== e.target) {
        X = X + e.target.offsetLeft;
        Y = Y + e.target.offsetTop;
    }
    
    const xMove = Math.round((X / width * movement) - (movement / 2));
    // console.log(xMove);
    const yMove = Math.round((Y / height * movement) - (movement / 2));
    // console.log(yMove);
    text.style.textShadow = `
    ${xMove}px ${yMove}px 0 rgba(255,0,255,0.7),
    ${xMove * - 1}px ${yMove * -1}px 0 rgba(0,255,255,0.7),
    ${yMove}px ${xMove * - 1}px 0 rgba(0,255,0,0.7),
    ${yMove * - 1}px ${xMove}px 0 rgba(0,0,255,0.7)
    `
}

hero.addEventListener("mousemove", shadow);
