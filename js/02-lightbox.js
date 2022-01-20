import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector(".gallery");

function galleryMarkup(items) {
  const markup = items
    .map((item) => {
      return `<a class="gallery__item" href="${item.original}">
                <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
                </a>`;
    })
    .join("");

  galleryRef.innerHTML = markup;
}

galleryMarkup(galleryItems);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

