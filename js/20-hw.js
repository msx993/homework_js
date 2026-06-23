const gallery = document.querySelector('.gallery');

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    gallery.scrollBy({
      right: 320,
      behavior: 'smooth'
    });
  }

  if (event.key === 'ArrowLeft') {
    gallery.scrollBy({
      left: -320,
      behavior: 'smooth'
    });
  }
});