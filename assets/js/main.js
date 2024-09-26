import { slideshow } from './modules/slideshow.js';

/* Main
############################################################################ */

document.addEventListener('DOMContentLoaded', function() {
  hljs.highlightAll();
  slideshow();
});

document.addEventListener("DOMContentLoaded", function() { 
  const galleryContainer = document.getElementById('gallery-container');
  const metadataUrl = '/works/n-pola/04-results/images/metadata.json'; 

  fetch(metadataUrl)
    .then(response => response.json())
    .then(data => {
      data.forEach(imageData => {
        const imageWrapper = document.createElement('div'); 
        imageWrapper.classList.add('gallery-item'); 

        
        const linkElement = document.createElement('a');
        linkElement.href = `/works/n-pola/04-results/${imageData.src}`; 
        linkElement.setAttribute('data-lightbox', 'gallery'); 
        linkElement.setAttribute('data-title', imageData.metadata.Description); 

        const imageElement = document.createElement('img');
        imageElement.src = `/works/n-pola/04-results/${imageData.src}`; 
        imageElement.alt = imageData.metadata.Description; 
        imageElement.classList.add('gallery-image'); 

        
        linkElement.appendChild(imageElement);

        
        imageWrapper.appendChild(linkElement);

        
        galleryContainer.appendChild(imageWrapper);
      });
    })
    .catch(error => {
      console.error('Fehler beim Laden der Bildmetadaten:', error);
    });
});
