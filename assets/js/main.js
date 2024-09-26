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

        // Erstelle den Link, der auf das große Bild verweist
        const linkElement = document.createElement('a');
        linkElement.href = `/works/n-pola/04-results/${imageData.src}`; // Der Link führt zum größeren Bild
        linkElement.setAttribute('data-fancybox', 'gallery'); // Setze das Fancybox-Attribut
        linkElement.setAttribute('data-caption', imageData.metadata.Description); // Optional: Bildbeschreibung

        const imageElement = document.createElement('img');
        imageElement.src = `/works/n-pola/04-results/${imageData.src}`; 
        imageElement.alt = imageData.metadata.Description; 
        imageElement.classList.add('gallery-image'); 

        // Füge das Bild in den Link ein
        linkElement.appendChild(imageElement);

        // Füge den Link in den Wrapper ein
        imageWrapper.appendChild(linkElement);

        // Füge den Wrapper in die Galerie ein
        galleryContainer.appendChild(imageWrapper);
      });
    })
    .catch(error => {
      console.error('Fehler beim Laden der Bildmetadaten:', error);
    });
});
