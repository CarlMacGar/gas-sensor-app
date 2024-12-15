import axios from "axios";
import { TEST_URL } from "@env";

export const testFunctionality= async(value: number) => {
    const response = await axios.get(`${TEST_URL}${value}`);
    return response.status;
}