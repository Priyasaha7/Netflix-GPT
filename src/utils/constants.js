export const LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YWFkMTg1YTdmZTZkMzgwYWI2OGY2ZDNkZWE2YzViMiIsIm5iZiI6MTc2NzQyODU5Ni42MDA5OTk4LCJzdWIiOiI2OTU4ZDFmNDY3Mjc0YzgwMWQ0YWYxYWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mFTCMA2UGKOMOpjyAvo5Cy_WuwvBwB3bjuBMzPqNfEE'
  }
};

export const CDN_IMG_URL = "https://image.tmdb.org/t/p/w200"

export const BG_IMG = 'https://assets.nflxext.com/ffe/siteui/vlv3/d13e2d55-5cdd-48c0-a55b-4b292d0b9889/web/IN-en-20251229-TRIFECTA-perspective_d7edcd70-4cfd-441c-858c-c5e400ed6c2b_medium.jpg'

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "हिंदी" },
  { identifier: "spanish", name: "español" },
];

export const MODEL_INSTRUCTION =
  "Act as a movie recommendation system where you have to recommend 5 best movies for the query. Give me the name of the movies only in the format I specified in example. Example - movie1, movie2, movie3, movie4, movie5";