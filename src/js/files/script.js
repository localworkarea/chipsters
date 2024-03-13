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




document.addEventListener("DOMContentLoaded", function() {
  // Функция для начала загрузки видео
  function loadVideo(video) {
    const source = video.querySelector('source');
    const dataSrc = video.getAttribute('data-src');
    source.setAttribute('src', dataSrc);
    video.load(); // Загрузить видео
  }
  
  // Создаем новый экземпляр IntersectionObserver
  const observerVideo = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // Если видео появилось во вьюпорте, начинаем его загрузку
      if (entry.isIntersecting) {
        loadVideo(entry.target);
        // Отключаем наблюдение после начала загрузки
        observerVideo.unobserve(entry.target);
      }
    });
  });
  
  // Получаем элемент видео
  const videoElement = document.querySelector('.watch__video-el');
  
  // Начинаем наблюдение за элементом видео
  observerVideo.observe(videoElement);



});

