//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import DogList from './components/DogList';
import NumDogsSelector from './components/NumDogsSelector';

export default function App() {

  const [numDogs, setNumDogs] = useState(5);
  const updateNumberOfDogs = (number) =>{
      setNumDogs(number);
  }

  return (
    <main>
      <h1>Pick your favorite dogs!</h1>
      <NumDogsSelector onChange={updateNumberOfDogs}/>
      <DogList numDogs={numDogs}></DogList>
    </main>
  );
}
