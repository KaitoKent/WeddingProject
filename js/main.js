// function slide
const slideContainer = document.querySelector('.slider');
const sliderText = document.querySelector('.slider--text');
const btnLeft = document.querySelector('.slider__btn-left');
const btnRight = document.querySelector('.slider__btn-right');

const sliderImages = [
  {
    src: './image/1111055.png',
    text: '22 December 2022'
  },
  {
    src: './image/1111057.png',
    text: '22 December 2022'
  },
  {
    src: './image/1111059.png',
    text: '22 December 2022'
  }
];

let slideCounter = 0;

const startSlider = () => {
  slideContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
    ), url(${sliderImages[0].src})`;
  sliderText.innerHTML = sliderImages[0].text;
};

btnRight.addEventListener('click', function () {
  if (slideCounter === sliderImages.length - 1) {
    slideContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
    ), url(${sliderImages[0].src})`;
    sliderText.innerHTML = sliderImages[0].text;
    slideCounter = -1;

    slideContainer.classList.add('fadeIn');
    setTimeout(() => {
      slideContainer.classList.remove('fadeIn');
    }, 1000);
  }
  slideContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
      ),url(${sliderImages[slideCounter + 1].src})`;
  sliderText.innerHTML = sliderImages[slideCounter + 1].text;
  slideCounter++;
  slideContainer.classList.add('fadeIn');
  setTimeout(() => {
    slideContainer.classList.remove('fadeIn');
  }, 1000);
});

btnLeft.addEventListener('click', function () {
  if (slideCounter === 0) {
    slideContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
    ),url(${sliderImages[sliderImages.length - 1].src})`;
    sliderText.innerHTML = sliderImages[sliderImages.length - 1].text;
    slideCounter = sliderImages.length;
    slideContainer.classList.add('fadeIn');
    setTimeout(() => {
      slideContainer.classList.remove('fadeIn');
    }, 1000);
  }

  slideContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
    ),url(${sliderImages[slideCounter - 1].src})`;
  sliderText.innerHTML = sliderImages[slideCounter - 1].text;
  slideCounter--;
  slideContainer.classList.add('fadeIn');
  setTimeout(() => {
    slideContainer.classList.remove('fadeIn');
  }, 1000);
});
document.addEventListener('DOMContentLoaded', startSlider);
// end slide


// function couting datetime
var startDateTime = new Date(2022, 11, 21, 23, 59, 59, 0); // YYYY (M-1) D H m s ms (start time and date from DB)
var startStamp = startDateTime.getTime();

var newDate = new Date();
var newStamp = newDate.getTime();

var timer; // for storing the interval (to stop or pause later if needed)

function updateClock() {
  newDate = new Date();
  newStamp = newDate.getTime();
  var diff = Math.round((newStamp - startStamp) / 1000);

  var d = Math.floor(diff / (24 * 60 * 60)); /* though I hope she won't be working for consecutive days :) */
  diff = diff - (d * 24 * 60 * 60);
  var h = Math.floor(diff / (60 * 60));
  diff = diff - (h * 60 * 60);
  var m = Math.floor(diff / (60));
  diff = diff - (m * 60);
  var s = diff;

  document.getElementById("day").innerHTML = d;
  document.getElementById("hour").innerHTML = h;
  document.getElementById("minute").innerHTML = m;
  document.getElementById("second").innerHTML = s;
}

timer = setInterval(updateClock, 1000);


// play audio

function playMusic() {
  var audio = new Audio('./image/audio/EdSheeran-Perfect.mp3');

  document.getElementById("#play-pause-btn")("click", function () {
    if (document.hasClass('fa-volume-xmark')) {
      document.removeClass('fa-volume-xmark');
      document.addClass('fa-volume-high');
      audio.play();
    }
    else {
      document.removeClass('fa-volume-high');
      document.addClass('fa-volume-xmark');
      audio.pause();
    }
  });

  audio.onended = function () {
    $("#play-pause-btn").removeClass('fa-volume-high');
    $("#play-pause-btn").addClass('fa-volume-xmark');
  };
}
