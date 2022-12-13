document.addEventListener("DOMContentLoaded", function () {
  let record = false;

  const startBtn = document.querySelector("#mic");
  startBtn.addEventListener("click", () => {
    console.log("handleer");

    window.SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    if (record) {
      console.log("recod", record);
      record = !record;
      startBtn.style.background = "none";
      recognition.stop();
    } else {
      startBtn.style.background = "red";
      record = !record;
    }
    let p = document.createElement("p");
    const words = document.querySelector(".words");
    words.appendChild(p);

    recognition.addEventListener("result", (e) => {
      let transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      p.textContent = transcript;
      if (e.results[0].isFinal) {
        p = document.createElement("p");
        words.appendChild(p);
      }

      // would need to 'debounce' or run every so often (call functions)
      if (transcript.includes("get the weather")) {
        console.log("Getting the weather for Dublin");
      }
    });

    recognition.addEventListener("end", recognition.start);
    recognition.start();
  });
  // startBtn.addEventListener("mouseup", () => {
  //   recognition.stop();
  // });

  const copy = document.querySelector("#copy");
  copy.addEventListener("click", () => {
    var copyText = document.getElementsByClassName("words");

    var range = document.createRange();
    range.selectNode(copyText); //changed here
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("data copied");
  });
});
