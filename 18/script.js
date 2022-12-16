const msg = new SpeechSynthesisUtterance();

let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");
const pauseButton = document.querySelector("#pause");
const resumeButton = document.querySelector("#resume");

// reach text value and assign to msg.text
msg.text = document.querySelector('[name="text"]').value;

//create populateVoices function

function populateVoices(e) {
  voices = this.getVoices(); //add voices into array. This refers to speechSynthesis
  console.log("voices", voices);
  voicesDropdown.innerHTML = voices
    .map((voice) => `<option value="${voice.name}">${voice.name}</option>`)
    .join("");
}

function setVoice() {
  //select voice
  msg.voice = voices.find((voice) => voice.name === this.value);
  toogle();
}

function toogle() {
  speechSynthesis.cancel();
  speechSynthesis.speak(msg);
}

function setOption() {
  msg[this.name] = this.value;
  toogle();
}

speechSynthesis.addEventListener("voiceschanged", populateVoices);
voicesDropdown.addEventListener("change", setVoice);
options.forEach((option) => option.addEventListener("change", setOption));
speakButton.addEventListener("click", toogle);
stopButton.addEventListener("click", () => {
  speechSynthesis.cancel(msg);
});
pauseButton.addEventListener("click", () => {
  speechSynthesis.pause(msg);
});
resumeButton.addEventListener("click", () => {
  speechSynthesis.resume(msg);
});
