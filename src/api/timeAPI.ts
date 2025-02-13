import axios from "axios";
import { AxiosResponse } from "axios";
import { timeApiTS } from "../models/apis";
import axiosRetry from "axios-retry";

const instance = axios.create({
    baseURL: "http://worldtimeapi.org/",
    timeout: 15000
})
axiosRetry(instance, {
    retries: 3,
    onRetry: (retryCount) => {
        console.log(`retry count: `, retryCount);
      },
})

const responseBody = (response: AxiosResponse) => response.data

const requests = {
    get: (url: string) => instance.get(url).then(responseBody)
}

export const timeAPI = {
    getTimeData: (): Promise<timeApiTS> => requests.get("api/ip")
}