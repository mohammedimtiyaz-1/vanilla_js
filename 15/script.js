document.addEventListener("DOMContentLoaded", function () {
  const hero = document.querySelector(".hero");
  const text = document.querySelector("h1");
  const walk = 500; // 25px

  function shadow(e) {
    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;
    const { offsetWidth: width, offsetHeight: height } = hero; // ES6 shorthand of 2 lines above
    // let x = e.offsetX;
    // let y = e.offsetY;
    let { offsetX: x, offsetY: y } = e; // ES6 shorthand of 2 lines above

    console.log(this, e.target); // only confirm what 'this' and 'e.target' are
    if (this !== e.target) {
      // compensate offset of item location on page vs x,y coordinates
      // otherwise, 'this' and 'e.target' coordinates reset 0,0 on the item itself
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width) * walk - walk / 2);
    const yWalk = Math.round((y / height) * walk - walk / 2);
    // walk is 100px // so max we'll go is 50px, and min we'll go is -50px;

    text.style.textShadow = `
            ${xWalk}px ${yWalk}px  rgba(112, 187, 31, 0.5),
            ${xWalk * -1}px ${yWalk}px  rgba(187, 31, 34, 0.5),
            ${yWalk}px ${xWalk * -1}px  rgba(31, 112, 187, 0.5),
            ${yWalk * -1}px ${xWalk}px  rgba(187, 184, 31, 0.5)
        `;
  }

  hero.addEventListener("mousemove", shadow);
});
