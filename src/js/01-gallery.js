// Add imports above this line
import { galleryItems } from '../js/gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector('.gallery');
galleryEl.innerHTML = createGallery();

const galleryItem = new SimpleLightbox('.gallery a', {
    caption: true,
    captionType: 'attr',
    overlay: true,
    captionsData: 'alt',
});

function createGallery() {
    return galleryItems.map(({ preview, original, description }) =>
    `<a class = 'gallery__item' href = '${original}'> <img class = 'gallery__image' src='${preview}' alt='${description}'/></a>`).join('')
};

console.log(galleryItems);
