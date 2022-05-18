import {useState, useEffect} from 'react';

import fetchDogs from './fetchDog';

export function DogsHook(numDogs) {
    const [dogs, setDogs]=useState([]);
    useEffect(()=> {

        (async() => {
          const dogs = await fetchDogs(numDogs);
          setDogs(dogs);  
        })();
        //return()=>{}//cleanup function
    }, [numDogs]);

    return dogs;
};

export function SelectedDogsHook(){
    const [selectedDogs, setSelectedDogs]=useState([]);

    const removeDogFromSelected = dog => selectedDogs.filter(selectedDog => dog !== selectedDog);
    
    const toggleDog = (dog) => {
        if(selectedDogs.includes(dog)) {
            setSelectedDogs(removeDogFromSelected(dog));
        } else {
            setSelectedDogs([...selectedDogs, dog]);
        }
    };
    return [selectedDogs, toggleDog]

}