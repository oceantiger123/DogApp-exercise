import Dog from "./Dog";

import { DogsHook, SelectedDogsHook } from "../hooks";

export default function DogList({ numDogs }) {
  const dogs = DogsHook(numDogs);

  const [selectedDogs, toggleDog] = SelectedDogsHook();

  const dogComponents = dogs.map((dog) => (
    <Dog
      selected={selectedDogs.includes(dog)}
      key={dog}
      dog={dog}
      toggleDog={toggleDog}
    />
  ));
  return <div id="dog-list">{dogComponents}</div>;
}
