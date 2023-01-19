// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);
const imgList = document.querySelector ('.gallery'); 
const imgMarkup = createImagesMarkup (galleryItems);
imgList.insertAdjacentHTML('beforeend', imgMarkup);

 function createImagesMarkup (galleryItems) {
    return galleryItems
    .map(({preview, original, description}) => {
       return ` <li><a class = "gallery__link " href="${original}">
       <img 
       class = "gallery__image" 
       src = "${preview}"
       alt = "${description}"/>
       </a></li>`;
    }) .join ("");
 
}

new SimpleLightbox('.gallery a', 
{
captions:true,
captionsData:"alt" ,
captionDelay : 250 ,
 }) ;