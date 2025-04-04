// RVoRxEDzZ6veBoNIhoyduScyFOur6ez9
// https://api.giphy.com/v1/gifs/search?api_key=RVoRxEDzZ6veBoNIhoyduScyFOur6ez9&q=happy&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips
require("dotenv").config();
console.log(process.env);
async function fetchGifs() {
  const response = await fetch(
    'https://api.giphy.com/v1/gifs/search?api_key=RVoRxEDzZ6veBoNIhoyduScyFOur6ez9&q=happy&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips'
  );
  const data = await response.json();
  console.log(data.data);
  return data.data;
}  