export const API = 'https://swapi.dev/api/people';

export const getData = async url => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
