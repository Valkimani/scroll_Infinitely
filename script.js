
// Elements for each object
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

// Images will change with every request hence the global variable is using let
let photosArray = [];
// Unsplash API
// Create a URL constant
const count = 10;
const apiKey = 'API KEY HERE';
const topics = 'topics'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&topics=${topics}`;

// Create elements for links & photos, Add to DOM
function showPhotos(){
    // Run function for each object in photoArray
    photosArray.forEach((photo) => {
// <a> element link to unsplash
const item = document.createElement('a');
item.setAttribute('href', photo.links.html);
item.setAttribute('target', '_blank');
// Create <img> for photo
const img = document.createElement('img');
img.setAttribute('src', photo.urls.regular);
img.setAttribute('alt', photo.alt_description)
img.setAttribute('title',photo.alt_description)
img.setAttribute('location',photo.topic_submissions)

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

// On load 
getPhotos();

