function setDate() {
  const now = new Date();

  // seconds
  const seconds = ("0" + now.getSeconds()).slice(-2);
  const secondsDegrees = (seconds / 60) * 360 + 90;
  document.querySelector(
    ".second-hand"
  ).style.transform = `rotate(${secondsDegrees}deg)`;
  if (seconds == 00) {
    document.querySelector(".second-hand").style.transition = "none";
  } else {
    document.querySelector(".second-hand").style.transition =
      "all 0.1s cubic-bezier(0.1, 2.7, 0.58, 1)";
  }

  // minutes
  const minutes = ("0" + now.getMinutes()).slice(-2);
  // const minutesDegress = ((minutes / 60) * 360) + 90;
  const minutesDegress = (minutes * 360) / 60 + (seconds * 360) / 60 / 60 + 90;
  document.querySelector(
    ".min-hand"
  ).style.transform = `rotate(${minutesDegress}deg)`;

  // hours
  const hours = now.getHours();
  // const hoursDegrees = ((hours / 12) * 360) + 90;
  const hoursDegrees = (hours * 360) / 12 + (minutes * 360) / 60 / 12 + 90;
  document.querySelector(
    ".hour-hand"
  ).style.transform = `rotate(${hoursDegrees}deg)`;

  document.querySelector(".time").innerHTML =
    hours + ":" + minutes + " <small>" + seconds + "</small>";
}

setInterval(setDate, 1000);
