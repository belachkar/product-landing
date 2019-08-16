$(function(){
  const gallery = $('.gallery a').simpleLightbox();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
  }
});
