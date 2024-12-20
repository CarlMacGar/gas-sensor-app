import axios from 'axios';
import { HISTORY_URL } from '@env';

const url = `${HISTORY_URL}/history`;

export const getHistory = async () => {
    console.log(url)
    const response = await axios.get(url);
    return response.data;
}
