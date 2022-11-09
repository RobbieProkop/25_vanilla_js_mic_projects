// app
//dom elements
const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

//functions

//used to play and pause the video
const toggleVideoStatus = () => {
  if (video.paused) {
    return video.play();
  }

  video.pause();
};

//update play/pause icon
const updatePlayIcon = () => {
  if (video.paused) {
    return (play.innerHTML = '<i class="fa fa-play fa-2x"></i>');
  }

  play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
};

//update the progress and timestamp
const updateProgress = () => {
  progress.value = (video.currentTime / video.duration) * 100;
  // timestamp.innerHTML = (+progress.value).toFixed(0);

  // get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }

  // Get Seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = "0" + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
};

// set video time to progress
const setVideoProgress = () => {
  video.currentTime = (+progress.value * video.duration) / 100;
};

//stops the video
const stopVideo = () => {
  video.currentTime = 0;
  video.pause();
  play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
};

//event listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
