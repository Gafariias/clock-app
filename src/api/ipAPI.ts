import axios from "axios";
import { AxiosResponse } from "axios";

const instance = axios.create({
    timeout: 15000
})

const responseBody = (response: AxiosResponse) => response.data

const requests = {
    get: (url: string) => instance.get(url).then(responseBody)
}

export const ipAPI = {
    getIP: (): Promise<string> => requests.get("https://api.ipify.org")
}