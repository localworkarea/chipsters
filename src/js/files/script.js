// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

const videoElement = document.querySelector('.hero__video-el');
const pcSource = document.querySelector('.video-hero-pc');
const mobSource = document.querySelector('.video-hero-mob');

function setVideoSource() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  if (screenWidth > screenHeight) {
    videoElement.src = pcSource.getAttribute('data-src');
    videoElement.load();
  } else {
    videoElement.src = mobSource.getAttribute('data-src');
    videoElement.load();
  }
}

window.addEventListener('DOMContentLoaded', setVideoSource);
function playVideoOnce() {
  videoElement.play();
  videoElement.removeEventListener('click', playVideoOnce);
}
videoElement.addEventListener('click', playVideoOnce);



// const videoElement = document.querySelector('.hero__video-el');
// const mobSource = document.querySelector('.video-hero-mob');
// const apngImage = document.getElementById('apng');

// function setVideoSource() {
//   const screenWidth = window.innerWidth;
//   const screenHeight = window.innerHeight;

//   if (screenWidth > screenHeight) {
//       // Если ширина больше высоты, загружаем APNG
//       if (!apngImage.src) {
//           apngImage.src = apngImage.getAttribute('data-src');
//           apngImage.style.display = 'block'; // Показываем анимированный PNG
//           videoElement.style.display = 'none'; // Скрываем видео
//           pauseAPNG();
//           apngImage.addEventListener('click', playAPNG);
//           // console.log("работает");
//       }

//   } else {
//       // Иначе загружаем MP4
//       if (!videoElement.src) {
//           videoElement.src = mobSource.getAttribute('data-src');
//           videoElement.load();
//       }
//       videoElement.style.display = 'block'; // Показываем видео
//       apngImage.style.display = 'none'; // Скрываем анимированный PNG
//       videoElement.addEventListener('click', playVideoOnce); // Добавляем обработчик для видео
//       // console.log("mp4");
//   }
// }

// window.addEventListener('DOMContentLoaded', setVideoSource);

// function pauseAPNG() {
//   if (apngImage.getAttribute('data-src').includes('.apng')) {
//     var canvas = document.createElement('canvas');
//     var context = canvas.getContext('2d');
//     var image = new Image();
//     image.onload = function() {
//       canvas.width = image.width;
//       canvas.height = image.height;
//       context.drawImage(image, 0, 0);
//       apngImage.src = canvas.toDataURL();
//     };
//     image.src = apngImage.getAttribute('data-src');
//   }
// }

// function playAPNG() {
//   var imageSrc = apngImage.getAttribute('data-src');
//   if (imageSrc) {
//     apngImage.src = imageSrc;
//     apngImage.removeEventListener('click', playAPNG);
//   }
// }
// function playVideoOnce() {
//   videoElement.play();
//   videoElement.removeEventListener('click', playVideoOnce);
// }




document.addEventListener("DOMContentLoaded", function() {

  // Функция для начала загрузки и воспроизведения видео
  function loadAndPlayVideo(video) {
    const source = video.querySelector('source');
    const dataSrc = video.getAttribute('data-src');
    source.setAttribute('src', dataSrc);
    video.load(); // Загрузить видео
    if (video.classList.contains('watch__bg-el')) {
      video.play(); // Воспроизвести видео
    }
  }
  
  // Создаем новый экземпляр IntersectionObserver
  const observerVideo = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // Если видео появилось во вьюпорте, начинаем его загрузку и воспроизведение
      if (entry.isIntersecting) {
        loadAndPlayVideo(entry.target);
        // Отключаем наблюдение после начала загрузки и воспроизведения
        observerVideo.unobserve(entry.target);
      }
    });
  });
  
  // Получаем элементы видео
  const videoElementThird = document.querySelector('.watch__video-el');
  const videoElementBg = document.querySelector('.watch__bg-el');
  
  // Начинаем наблюдение за элементами видео
  observerVideo.observe(videoElementThird);
  observerVideo.observe(videoElementBg);
});



