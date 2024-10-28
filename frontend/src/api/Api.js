const API_KEY = "21121f68-f481-4258-9e80-cb9dbb4438cc";

export const getMatches = () => {
  const url = `https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}`;

  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log("error:", error));
};
