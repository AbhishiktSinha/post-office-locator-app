import axios from "axios";

export default async function request(httpConfig) {

    try {
        const response = await axios(httpConfig);        

        if (!response.status >= 200 && response.status < 300) {
            throw new Error('Something went wrong');
        }

        return {data: response.data};
    }
    catch(e) {
        return {error : e.message};
    }
}