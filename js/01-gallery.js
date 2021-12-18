import { galleryItems } from './gallery-items.js';

const instance = basicLightbox.create(`
    <img src="" width="800" height="600">
`)

const refs = {
  gallery: document.querySelector('.gallery'),
  image: instance.element().querySelector('img'),
};

refs.gallery.addEventListener('click', onImageClick);

function onImageClick(e) {
  e.preventDefault();
  const isClickOnImage = e.target.classList.contains('gallery__image');
  if (!isClickOnImage) {
    return;
  };
  refs.image.src = e.target.dataset.source;
  instance.show()
}

const cardGallery = createGallery(galleryItems);

function createGallery(galleryItems) {
    return galleryItems
    .map(({ preview, original, description}) => {
        return `
    <div class="gallery__item">
  <a  class="gallery__link"
      href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
    })
        .join('');
}


refs.gallery.insertAdjacentHTML('beforeend', cardGallery);

console.log(galleryItems);



// 1.Создание и рендер разметки по массиву данных galleryItems 
// и предоставленному шаблону элемента галереи.
// 2.Реализация делегирования на div.gallery 
// и получение url большого изображения.
// 3.Подключение скрипта и стилей библиотеки модального окна basicLightbox. 
// Используй CDN сервис jsdelivr 
// и добавь в проект ссылки на минифицированные(.min) файлы библиотеки.
// 4.Открытие модального окна по клику на элементе галереи. 
// Для этого ознакомься с документацией и примерами.
// 5.Замена значения атрибута src элемента < img > в модальном окне 
// перед открытием.Используй готовую разметку модального окна 
// с изображением из примеров библиотеки basicLightbox.