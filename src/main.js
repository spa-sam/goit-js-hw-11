'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const BASE = 'https://pixabay.com/api/';
const API_KEY = '41493530-c71176b83a18405cd33ba2537';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFESEARCH = 'true';

const BASE_URL = `${BASE}?key=${API_KEY}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH}&q=`;

function createInfoBlock(title, value) {
  return `
    <div style="display: flex;
                flex-direction: column;
                align-items: center;">
      <p>${title}</p>
      <p>${value}</p>
    </div>
  `;
}

const linkElement = document.querySelector('.linkStyle');
const cardElement = document.querySelector('.cardStyle');
const imgElement = document.querySelector('.imgStyle');
const infoElement = document.querySelector('.infoStyle');

function createImageCardMarkup({
  largeImageURL,
  webformatURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
    <a href="${largeImageURL}" class="lightbox-image linkStyle">
      <div class="image-card cardStyle">
        <img src="${webformatURL}" alt="${tags}" class="imgStyle" />
        <div class="infoStyle">
          ${createInfoBlock('Likes', likes)}
          ${createInfoBlock('Views', views)}
          ${createInfoBlock('Comments', comments)}
          ${createInfoBlock('Downloads', downloads)}
  `;
}

const lightbox = new SimpleLightbox('.lightbox-image', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createGalleryElement(parentElement) {
  const gallery = document.createElement('div');
  gallery.className = 'gallery custom-gallery-style';
  parentElement.appendChild(gallery);
  return gallery;
}
const container = document.querySelector('.container');
const createGallery = createGalleryElement(container);

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  const gallery = document.querySelector('.gallery') || createGalleryElement();
  gallery.innerHTML = '';
  const loader = document.querySelector('.loader');
  loader.style.display = 'block';
  const searchQuery = document.querySelector('input[type="text"]').value;

  fetch(`${BASE_URL}${encodeURIComponent(searchQuery)}`)
    .then(response => response.json())
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.warning(toastOptions);
      } else {
        data.hits.forEach(image => {
          const markup = createImageCardMarkup(image);
          gallery.innerHTML += markup;
        });
      }
      searchInput.value = '';
      lightbox.refresh();
      loader.style.display = 'none';
    })
    .catch(error => {
      console.error('Error:', error);
      loader.style.display = 'none';
      iziToast.error({
        ...toastOptions,
        message: 'An error occurred. Please try again later.',
      });
    });
});

const searchInput = document.querySelector('.search-input');
const toastOptions = {
  title: '',
  message:
    'Sorry, there are no images matching<br> your search query. Please try again!',
  position: 'topRight',
  backgroundColor: '#EF4040',
  messageColor: '#FAFAFB',
  theme: 'dark',
  messageSize: '322px',
};
