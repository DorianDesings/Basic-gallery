const gallery = document.getElementById('gallery');
const galleryModal = document.getElementById('gallery-modal');

gallery.addEventListener('click', e => {
  if (e.target.parentElement.classList.contains('gallery__item')) {
    galleryModal.textContent = '';
    const imgSource = e.target.parentElement.children[0].src;
    const img = document.createElement('img');
    img.src = imgSource;
    galleryModal.appendChild(img);
    galleryModal.classList.add('gallery__modal--show');
  }
});

galleryModal.addEventListener('click', e => {
  if (e.target.classList.contains('gallery__modal')) {
    galleryModal.classList.remove('gallery__modal--show');
  }
});
