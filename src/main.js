import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector(".form");
const input = document.querySelector(".inputsrc");
const loader = document.querySelector(".loader");
const gallery = document.querySelector(".gallery");

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250
});

form.addEventListener("submit", event => {
    event.preventDefault();

    const searchParams = new URLSearchParams({
      key: '41766309-9b727aff341ca6e5a641aa2fb',
      q: input.value,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true'
    });
  
    fetch(`https://pixabay.com/api/?${searchParams}`)
      .then((response) => {
        loader.classList.remove('hide');
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((images) => {
        setTimeout(() => {
          loader.classList.add('hide');
          gallery.innerHTML = "";
          if (images.hits.length > 0) {
            const imglist = images.hits.reduce((html, hit) => {
              return (
                html +
                `<li>
          <a href="${hit.largeImageURL}">
            <img src="${hit.webformatURL}" alt="${hit.tags}" class="gallery-image">
          </a>
          <div class="info">
            <div class="field">
              <span class="label">Likes</span>
              <span class="value">${hit.likes}</span>
            </div>
            <div class="field">
              <span class="label">Views</span>
              <span class="value">${hit.views}</span>
            </div>
            <div class="field">
              <span class="label">Comments</span>
              <span class="value">${hit.comments}</span>
            </div>
            <div class="field">
              <span class="label">Downloads</span>
              <span class="value">${hit.downloads}</span>
            </div>
          </div>
          </li>`
              )
            }, '')
            gallery.insertAdjacentHTML('beforeend', imglist);
            lightbox.refresh();

          } else {
            iziToast.error({
              message: 'Sorry, there are no images matching your search query. Please try again!',
              position: 'topRight'
            });
          }
        }, 2000);
        
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      form.reset();
    });
});
