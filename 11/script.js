document.addEventListener("DOMContentLoaded", function () {
  /*
   * grab all of the elements
   */

  const player = document.querySelector(".player");
  const video = player.querySelector(".viewer");
  const progress = player.querySelector(".progress");
  const progressBar = player.querySelector(".progress-filled");
  const toggle = player.querySelector(".toggle");
  const skipButtons = player.querySelectorAll("[data-skip]");
  const skipBackwards = player.querySelector(".backwards");
  const skipForwards = player.querySelector(".forwards");
  const ranges = player.querySelectorAll(".player-slider");
  const volume = document.getElementById("volumeSpan");
  const speed = document.getElementById("speedSpan");
  const full = document.querySelector(".fullscreen");

  /*
   * building the functions
   */

  // toggle between Play/Pause
  function togglePlay() {
    // if video is paused, toggle play and vice versa
    const method = video.paused ? "play" : "pause";
    video[method]();
  }

  // update between Play/Pause buttons
  function updateButton() {
    const icon = this.paused ? "►" : "❚ ❚";
    toggle.textContent = icon;
  }

  // skip video based on dataset value
  function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
  }

  // skip backwards (based on keyCode 'J')
  function skipBack() {
    video.currentTime += parseFloat(skipBackwards.dataset.skip);
  }

  // skip forwards (based on keyCode 'L')
  function skipFwd() {
    video.currentTime += parseFloat(skipForwards.dataset.skip);
  }

  // toggle fullscreen (either keyCode 'F' or button)
  var handleFullscreen = () => {
    if (isFullScreen()) {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
      else if (document.webkitCancelFullScreen)
        document.webkitCancelFullScreen();
      else if (document.msExitFullscreen) document.msExitFullscreen();
    } else {
      if (video.requestFullscreen) video.requestFullscreen();
      else if (video.mozRequestFullScreen) video.mozRequestFullScreen();
      else if (video.webkitRequestFullScreen) video.webkitRequestFullScreen();
      else if (video.msRequestFullscreen) video.msRequestFullscreen();
    }
  };

  var isFullScreen = () => {
    return !!(
      document.fullScreen ||
      document.webkitIsFullScreen ||
      document.mozFullScreen ||
      document.msFullscreenElement ||
      document.fullscreenElement
    );
  };

  // slide ranges (speed and volume)
  function handleRangeUpdate() {
    video[this.name] = this.value;
    if (this.name == "volume") {
      const percent = parseInt(this.value * 100);
      volume.innerHTML = `${percent}%`;
    } else if (this.name == "playbackRate") {
      speed.innerHTML = this.value;
    }
  }

  // update progress bar of video duration
  function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
  }

  // scrub video progress bar of duration
  function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
  }

  /*
   * hook-up the event listeners
   */

  // keyCodes (similar to YouTube)
  document.body.onkeyup = (e) => {
    if (e.keyCode == 32 || e.keyCode == 75) {
      togglePlay();
    } else if (e.keyCode == 74) {
      skipBack();
    } else if (e.keyCode == 76) {
      skipFwd();
    } else if (e.keyCode == 70) {
      handleFullscreen();
    }
  };

  //
  full.addEventListener("click", handleFullscreen);

  // video
  video.addEventListener("click", togglePlay);
  video.addEventListener("play", updateButton);
  video.addEventListener("pause", updateButton);
  video.addEventListener("timeupdate", handleProgress);

  // play button / toggle
  toggle.addEventListener("click", togglePlay);

  // skip buttons
  skipButtons.forEach((button) => {
    button.addEventListener("click", skip);
  });

  // ranges
  ranges.forEach((range) => {
    range.addEventListener("change", handleRangeUpdate);
  });
  ranges.forEach((range) => {
    range.addEventListener("mousemove", handleRangeUpdate);
  });

  // progress bar
  let mousedown = false;
  progress.addEventListener("click", scrub);
  progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
  progress.addEventListener("mousedown", () => (mousedown = true));
  progress.addEventListener("mouseup", () => (mousedown = false));
});
