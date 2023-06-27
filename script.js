
// Elements for each object
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

// Images will change with every request hence the global variable is using let
let photosArray = [];
// Unsplash API
// Create a URL constant
const count = 10;
const apiKey = 'API_KEY';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Create a helper function to set Attributes on DOM and avoid repetition 

function setAttributes(element, attributes) {
    for(const key in attributes){
element.setAttribute(key, attributes[key])
    }
}
// Create elements for links & photos, Add to DOM
function showPhotos(){
    // Run function for each object in photoArray
    photosArray.forEach((photo) => {
// <a> element link to unsplash
const item = document.createElement('a');
setAttributes(item, {
    href:photo.links.html,
    target: '_blank',
});
// Create <img> for photo
const img = document.createElement('img');
setAttributes(img, {
    src:photo.urls.regular,
    alt:photo.alt_description,
    title:photo.alt_description,
})
// Put <img> inside <a>, then put both inside imageContainer element
item.appendChild(img);
imageContainer.appendChild(item);
    });
}
// Get photos from unsplash API
async function getPhotos(){
    try{
const response = await fetch(apiUrl);
photosArray = await response.json();
showPhotos();
// console.log(photosArray)
// console.log(data)
    }catch(error){
        // catch error here
    }
}

// Check whether scrolling near the bottom of the page loads ore photos
// Target the scroll event
window.addEventListener('scroll', () => {
// eventListener function
console.log('scrolled');
});
console.log(window)
// On load 
getPhotos();

