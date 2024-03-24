// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

const heroSection = document.querySelector('.hero');
const videoElement = document.querySelector('.hero__video-el');
const pcSource = document.querySelector('.video-hero-pc');
const mobSource = document.querySelector('.video-hero-mob');

function setVideoSource() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  if (screenWidth > screenHeight) {
    videoElement.src = pcSource.getAttribute('data-src');
    videoElement.load();
    // heroSection.classList.remove('mobile');
  } else {
    videoElement.src = mobSource.getAttribute('data-src');
    videoElement.load();
    // heroSection.classList.add('mobile');
  }
}

window.addEventListener('DOMContentLoaded', setVideoSource);
function playVideoOnce() {
  videoElement.play();
  videoElement.removeEventListener('click', playVideoOnce);
}
videoElement.addEventListener('click', playVideoOnce);




// document.addEventListener("DOMContentLoaded", function() {

//   // Функция для начала загрузки и воспроизведения видео
//   function loadAndPlayVideo(video) {
//     const source = video.querySelector('source');
    // const dataSrc = video.getAttribute('data-src');
    // source.setAttribute('src', dataSrc);
//     video.load(); // Загрузить видео
//     if (video.classList.contains('watch__bg-el')) {
//       video.play(); // Воспроизвести видео
//     }
//   }
  
//   // Создаем новый экземпляр IntersectionObserver
//   const observerVideo = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       // Если видео появилось во вьюпорте, начинаем его загрузку и воспроизведение
//       if (entry.isIntersecting) {
//         loadAndPlayVideo(entry.target);
//         // Отключаем наблюдение после начала загрузки и воспроизведения
//         observerVideo.unobserve(entry.target);
//       }
//     });
//   });
  
//   // Получаем элементы видео
//   const videoElementThird = document.querySelector('.watch__video-el');
//   const videoElementBg = document.querySelector('.watch__bg-el');
  
//   // Начинаем наблюдение за элементами видео
//   observerVideo.observe(videoElementThird);
//   observerVideo.observe(videoElementBg);
// });



document.addEventListener("DOMContentLoaded", function() {

  // Функция для начала загрузки и воспроизведения видео
  function loadAndPlayVideo(video) {
    const sources = video.querySelectorAll('source');
    const isLandscape = window.innerWidth > window.innerHeight;
    sources.forEach(source => {
      if (isLandscape && source.classList.contains('watch-pc')) {
        source.setAttribute('src', source.getAttribute('data-src'));
      } else if (!isLandscape && source.classList.contains('watch-mob')) {
        source.setAttribute('src', source.getAttribute('data-src'));
      }
    });
    video.load();
    const dataSrc = video.getAttribute('data-src');
    if (dataSrc) {
      video.setAttribute('src', dataSrc);
      video.load();
      if (video.classList.contains('watch__bg-el')) {
        video.play();
      }
    }
  }
  
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
