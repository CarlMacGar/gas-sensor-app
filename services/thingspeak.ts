import axios from 'axios';
import { THINGSPEAK_URL } from '@env';

export const getCurrentThingspeak = async () => {
    const url = `${THINGSPEAK_URL}1`;
    console.log(url)
    const response = await axios.get(url);
    return response.data;
}

export const getThingspeak = async () => {
    const url = `${THINGSPEAK_URL}1500`;
    const response = await axios.get(url);
    return response.data;
}