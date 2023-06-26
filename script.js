// Unsplash API

// Create a URL constant
const count = 10;
const apiKey = 'API-KEY_HERE';
const topics = 'topics'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&topics=${topics}`;

// Get photos from unsplash API
async function getPhotos(){
    try{
const response = await fetch(apiUrl);
const data = await response.json();
console.log(data)
    }catch(error){
        // catch error here
    }
}

// On load 
getPhotos();
