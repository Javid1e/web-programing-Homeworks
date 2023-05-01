import axios from 'axios';

async function GetRandomPoem() {
    try {
        const response = await axios.get(`http://localhost:3008/homeWork1Poems`);
        const min = 1;
        const max = 400;
        const id = (Math.floor(Math.random() * (max - min + 1)) + min).toString();
        const falls = response.data;
        return falls[0]["falls"][id];
    } catch (error) {
        console.error(error);
        return "ServerIsDown";
    }
}

export default GetRandomPoem ;