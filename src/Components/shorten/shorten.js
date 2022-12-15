import fetch from "node-fetch";

const url =
  "https://ismaelc-bitly.p.rapidapi.com/v3/shorten?login=undefined&apikey=undefined&longUrl=http%3A%2F%2Fwww.mashape.com";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5dae8a988dmsh24dcd21adbc2d9ep11837ejsn0c24e9ce946c",
    "X-RapidAPI-Host": "ismaelc-bitly.p.rapidapi.com",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
