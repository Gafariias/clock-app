import axios from "axios";
import { quotesTS } from "../models/quoteAPI";
import { AxiosResponse } from "axios";

const instance = axios.create({
    baseURL: "https://programming-quotes-api.azurewebsites.net/api/quotes/",
    timeout: 15000
})

const responseBody = (response: AxiosResponse) => response.data

const requests = {
    get: (url: string) => instance.get(url).then(responseBody)
}

export const QuoteAPI = {
    getQuote: (): Promise<quotesTS> => requests.get("random")
}