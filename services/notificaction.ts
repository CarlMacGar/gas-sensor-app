import axios from 'axios';
import { HISTORY_URL } from '@env';

export const setEmail = async (email: string) => {
    console.log(HISTORY_URL)
    const response = await axios.get(`${HISTORY_URL}/email/${email}`);
    return response.status;
}