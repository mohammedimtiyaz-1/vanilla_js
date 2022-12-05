document.addEventListener("DOMContentLoaded", function () {
  const pressed = [];
  const secretCode = "secret";
  window.addEventListener("keyup", (e) => {
    // console.log(e.keyCode); // if using keyCode numerics
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if (pressed.join("").includes(secretCode)) {
      console.log("CONGRATS!");
      cornify_add();
    }
  });
});
