export const fetchFixtures = async () => {
  const url = "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "953c5247bfmsh834e1258f271226p132277jsn7d296c0cfc3e",
      "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    return result;
  } catch (error) {
    console.error(error);
  }
};
