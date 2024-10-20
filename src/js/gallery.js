import { images } from '../data/images.js';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';


let gallery = document.querySelector('.gallery');

renderHtml();

function renderHtml() {
  let html = '';

  images.forEach(({ preview, original, description }) => {
    html += `<li class="gallery-item">
    <a class="gallery-link" href="${original}">
      <img
        class="gallery-image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>
  `;
  });

  gallery.innerHTML = html;
}

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250
});



