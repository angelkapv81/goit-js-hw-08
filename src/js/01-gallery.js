import { galleryItems } from './gallery-items.js';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const markup = galleryItems
  .map(
    el =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
      />
  </a>
</div>
      `
  )
  .join(''); // рядок, який містить версику картинок галереї

const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML('beforeend', markup);

galleryEl.addEventListener('click', openLarge);

const lightbox = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: 2500,
});
function openLarge(event) {
  event.preventDefault();
}
