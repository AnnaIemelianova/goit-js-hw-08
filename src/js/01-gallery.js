// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);


//Створення і рендер розмітки на підставі масиву даних

const containerEl = document.querySelector('.gallery');
containerEl.style.listStyle = 'none';
console.log(containerEl);

const galleryItemsMarkup = 
galleryItems.reduce((acum, { preview, original, description }) => {
    return acum += `<li> <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a> </li>`
}, '');

console.log(galleryItemsMarkup);

containerEl.insertAdjacentHTML('beforeend', galleryItemsMarkup);

// Ініціалізація бібліотеки
// відображення підписів до зображень з атрибута alt
const lightbox = new SimpleLightbox(".gallery a", {
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 250,
  });