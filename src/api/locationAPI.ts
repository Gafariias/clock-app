import axios from "axios";
import { quotesTS } from "../models/quoteAPI";
import { AxiosResponse } from "axios";

const instance = axios.create({
    baseURL: "https://api.ipbase.com/v2/info",
    timeout: 15000
})

const responseBody = (response: AxiosResponse) => response.data

const requests = {
    get: (url: string) => instance.get(url).then(responseBody),
}

export const loactionAPI = {
    getQuote: (IP:string): Promise<quotesTS> => requests.get(`?apikey=ipb_live_0gQmYCj88TxEb1g6YEm2aObGOsASFTaP6ClGaL1o&language=en&ip=${IP}`)
}