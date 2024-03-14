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
