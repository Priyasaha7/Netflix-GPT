export const LOGO = "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg";

export const USER_AVATAR = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY,
  }
};


export const CDN_IMG_URL = "https://image.tmdb.org/t/p/w200"

export const BG_IMG = 'https://assets.nflxext.com/ffe/siteui/vlv3/d13e2d55-5cdd-48c0-a55b-4b292d0b9889/web/IN-en-20251229-TRIFECTA-perspective_d7edcd70-4cfd-441c-858c-c5e400ed6c2b_medium.jpg'

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "हिंदी" },
  { identifier: "spanish", name: "español" },
];

export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

export const MODEL_INSTRUCTION =
  "Act as a movie recommendation system where you have to recommend 5 best movies for the query. Give me the name of the movies only in the format I specified in example. Example - movie1, movie2, movie3, movie4, movie5";