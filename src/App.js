import { useState, useEffect } from 'react';
import { API, getData } from './lib/api';
import './App.css';

export default function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    (async () => {
      const { results } = await getData(API);
      setCharacters(results);
    })();
  }, []);

  return (
    <>
      <h1>Star Wars characters</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Film appearances</th>
          </tr>
        </thead>
        <tbody>
          {characters.map(({ name, height }) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{Number(height)}</td>
              <td>??</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
