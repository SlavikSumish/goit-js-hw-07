import { galleryItems } from './gallery-items.js';


const refs = {
  gallery: document.querySelector('.gallery'),
}

refs.gallery.addEventListener('click', onImageClick)

function onImageClick(e) {
  e.preventDefault();
  const isClickOnImage = e.target.classList.contains('gallery__image');
  if (!isClickOnImage) {
    return;
  }
}

const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description}) => {
      return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"  />
</a>`
}).join('');
}

refs.gallery.innerHTML = galleryMarkup;

new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250 });

console.log(galleryItems);
