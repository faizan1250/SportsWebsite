const API_KEY = "b3acc36e-8afe-431e-bc64-a7afaf0f3ed1";

export const getMatches = () => {
  const url = `https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}`;

  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log("error:", error));
};
