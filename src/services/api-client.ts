import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'c61a98545fbb4d4ab34c49870fa22d33',
    },
});
