import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { 
    Main, 
    Wrapper, 
    GreetingMessage, 
    MainText,
    Hour,
    ExtraText
} from "./styles";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";
import themeTS from "../../types/theme";
import { IPLocationTS, timeApiTS } from "../../models/apis";
import Quote from "../../components/quote";
import { ArrowDown, ArrowUp, Moon, Sun } from "../../assets/icons";

interface props {
    onData(theme: themeTS): void
}

export default function Home(p: props) {
    const [theme, setTheme] = useState(light)
    const [IP, setIP] = useState("")
    const [msg, setMsg]  = useState("Good Morning")
    const [isOpen, setIsOpen] = useState(false)
    const [timeAPIData, setTimeAPIData] = useState<timeApiTS>()
    const [locationAPIData, setLocationAPIData] = useState<IPLocationTS>()
    const [loading, setIsLoading] = useState(true)
    const [date, setDate] = useState(new Date());

    const toggleOpen = () =>  {
        isOpen ? setIsOpen(false) : setIsOpen(true)
    }
    useEffect(() => {
        axios.get<string>("https://api.ipify.org")
        .then(res => {
            setIP(res.data)
        })
        .catch(err => {
            console.error(err)
        })
    }, [])

    // useEffect(() => {
    //     let error = false
    //     console.log(IP)
    //     if (IP != undefined) {
    //         axios.get<timeApiTS>("https://timeapi.io/api/time/current/ip", {
    //             params: {
    //                 ipAddress: IP
    //             }
    //         })
    //         .then(res => {
    //             setTimeAPIData(res.data)
    //         })
    //         .catch(err => {
    //             console.error(err)
    //             error = true
    //         })

    //         axios.get<IPLocationTS>("https://api.ipbase.com/v2/info", {
    //             params: {
    //                 apikey: "ipb_live_jpGBFHSbom4lz7gs8FH9wdoNA93uo0fPHkxX8ss5",
    //                 language: "en",
    //                 ip: IP
    //             }
    //         })
    //         .then(res => {
    //             setLocationAPIData(res.data)
    //         })
    //         .catch(err => {
    //             console.error(err)
    //             error = true
    //         })
    //     }

    //     console.log(locationAPIData)

    //     error ? setIsLoading(true) : setIsLoading(false)
    // }, [IP])

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    }, []);

    const tick = useCallback(() => {
        setDate(new Date());
    }, []);

    useEffect(() => {
        if ( date.getSeconds() >= 30) {
            setTheme(dark)
            setMsg("Good Evening")
        } else if (date.getSeconds() >= 15)  {
            setMsg("Good Afternoon")
        }else {
            setTheme(light)
            setMsg("Good Morning")
        }
        p.onData(theme)
    }, [date])

    const timeString = date;
    
    return(
        <Main>
            <Wrapper>
                <Quote isOpen={isOpen}/>

                <MainText isOpen={isOpen}>
                    <GreetingMessage>
                        <h2>{msg}</h2>
                    </GreetingMessage>

                    <Hour>
                        {
                            timeString.getMinutes() < 10 ? (
                                <h1>{`${timeString.getHours()}:0${timeString.getMinutes()}`}</h1>
                            ) : (
                                <h1>{`${timeString.getHours()}:${timeString.getMinutes()}`}</h1>
                            )
                        }
                        <h4>São Paulo/America</h4>
                    </Hour>

                    <h3>IN {locationAPIData?.data.location.city.name}, {locationAPIData?.data.location.country.alpha2}</h3>

                    <button onClick={toggleOpen}>
                        MORE 
                        <span>
                            <ArrowDown />
                        </span>
                    </button>
                </MainText>

                <ExtraText isOpen={isOpen}>
                        <span><h4>CURRENT TIMEZONE</h4> <h3>Europe/London</h3></span>
                        <span><h4>DAY OF THE YEAR</h4> <h3>295</h3></span>
                        <span><h4>DAY OF THE WEEK</h4> <h3>5</h3></span>
                        <span><h4>WEEK NUMBER</h4> <h3>42</h3></span>
                </ExtraText>
            </Wrapper>
        </Main>
    )
}