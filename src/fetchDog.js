
async function fetchDogs(num) {
    const response = await fetch(`https://dog.ceo/api/breeds/image/random/${num}`);
    const { message: dogs } = await response.json();
    return dogs;
};

export default fetchDogs;