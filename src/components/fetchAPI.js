const getCoins = async () => {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const requestJson = await request.json();
  return requestJson.currencies;
};

export default getCoins;
