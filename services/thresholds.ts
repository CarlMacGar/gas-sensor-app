import axios from 'axios';
import { WRITE_THRESHOLDS_URL, GET_THRESHOLDS_URL } from '@env';

export const getThresholds = async () => {
    const response = await axios.get(GET_THRESHOLDS_URL);
    return {temperature: response.data.feeds[0].field1, gas: response.data.feeds[0].field1};
}

export const setThresholds = async (temperature: string, gas: string) => {
    const url = `${WRITE_THRESHOLDS_URL}&field1=${temperature}&field2=${gas}`;
    console.log(url);
    const response = await axios.get(url);
    return response.status;
}