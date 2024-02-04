const btnPlayPause = document.querySelector("#play-pause");
const btnNext = document.querySelector("#next");
const btnPrev = document.querySelector("#previous");
const chapterNumber = document.querySelector("#chapterNumber");
const totalChapters = 10;
let audio = new Audio(`./assets/book/1.mp3`);
let currentChapter = 1;
let itsPlaying = false;

function playAudio(){
  audio.play();
  btnPlayPause.classList.add("bi-pause-circle-fill");
  btnPlayPause.classList.remove("bi-play-circle-fill");
}

function pauseAudio(){
  audio.pause();
  btnPlayPause.classList.remove("bi-pause-circle-fill");
  btnPlayPause.classList.add("bi-play-circle-fill"); 
}

function changeChapter(){
  audio.src = `./assets/book/${currentChapter}.mp3`;
  chapterNumber.textContent = currentChapter;
}

btnPlayPause.addEventListener("click", () => {
  if(!itsPlaying){
    playAudio()
    itsPlaying = true;
  } else {
    pauseAudio();
    itsPlaying = false;
  }
});

btnNext.addEventListener("click", () => {
  currentChapter === totalChapters ? currentChapter = 1 : currentChapter += 1;
  changeChapter();
  playAudio();
});

btnPrev.addEventListener("click", () => {
  currentChapter === 1 ? currentChapter = 10 : currentChapter -= 1;
  changeChapter();
  playAudio();
});
