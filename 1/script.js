// function buildHtml () {
//     const sounds = [
//         {sound: "clap", key: "a", data: "65"},
//         {sound: "cowbell", key: "s", data: "83"},
//         {sound: "crash", key: "d", data: "68"},
//         {sound: "hihat", key: "f", data: "70"},
//         {sound: "kick", key: "g", data: "71"},
//         {sound: "openhat", key: "h", data: "72"},
//         {sound: "perc", key: "j", data: "74"},
//         {sound: "snare", key: "k", data: "75"},
//         {sound: "tom", key: "l", data: "76"}
//     ]
//     let div, audio = "";
//     sounds.map(sound => {
//         div += "<div class='key' data-key='" + sound.data + "'><kbd>"+ sound.key + "</kbd><span class='sound'>" + sound.sound + "</span></div>";
//         audio += "<audio src='sounds/" + sound.sound + ".wav' data-key='" + sound.data + "'></audio>";
//     });
//     let keyDiv = document.getElementById("keys");
//     keyDiv.insertAdjacentHTML("beforeend", div, audio);
// }
// buildHtml();

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  console.log(this);
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
