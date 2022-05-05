// Add imports above this line
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line


console.log(galleryItems);

const gallery = document.querySelector('.gallery')
const galleryMarkup = createGalleryMarkup(galleryItems)
gallery.insertAdjacentHTML('beforeend', galleryMarkup)

function  createGalleryMarkup(galleryItems){
return galleryItems.map(({preview,original,description}) => {
  return `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
  `
}).join('')
}

const lightbox = new SimpleLightbox('.gallery a', 
{captionsData: "alt",
captionPosition	:'bottom',
captionDelay :	250});