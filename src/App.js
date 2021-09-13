import { useState, useEffect } from 'react';
import './App.css';

const API = 'https://swapi.dev/api/people';

export default function App() {
  const [people, setPeople] = useState([]);

  const getData = async () => {
    const response = await fetch(API);
    const data = await response.json();

    setPeople(data.results);
  };

  // Initial setup
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
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
          {people.map(({ name, height }) => (
            <tr>
              <td>{name}</td>
              <td>{Number(height)}</td>
              <td>??</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
