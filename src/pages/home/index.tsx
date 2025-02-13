import { useCallback, useEffect, useState } from "react";
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
import { ArrowDown, Moon, Sun } from "../../assets/icons";
import { ipAPI } from "../../api/ipAPI";
import { timeAPI } from "../../api/timeAPI";

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
    const [icon, setIcon] = useState(<Moon/>);

    const toggleOpen = () =>  {
        isOpen ? setIsOpen(false) : setIsOpen(true)
    }


    useEffect(() => {
        ipAPI.getIP()
        .then(res => {
            setIP(res)
        })
        .catch(err => {
            console.error(err)
        })
    }, [])

    useEffect(() => {
        console.log(IP)
        if (IP != undefined && IP != "") {
            timeAPI.getTimeData()
            .then(response => {
                setTimeAPIData(response)
            })
            .catch(err => {
                console.error(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
        }
    }, [IP])

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
            setIcon(<Moon/>)
            setMsg("Good Evening")
        } else if (date.getSeconds() >= 15)  {
            setMsg("Good Afternoon")
        }else {
            setTheme(light)
            setIcon(<Sun/>)
            setMsg("Good Morning")
        }
        p.onData(theme)
    }, [date])

    const timeString = date;
    
    return(
        <Main>
            <Wrapper>
                <Quote isopen={isOpen}/>

                <MainText isopen={isOpen}>
                    <GreetingMessage>
                        {icon}
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
                        <h4>{timeAPIData?.abbreviation}</h4>
                    </Hour>

                    {/* <h3>IN {`${locationAPIData?.data.location.city.name}, ${locationAPIData?.data.location.country.hasc_id}`}</h3> */}
                    <h3>IN CURITIBA, BR</h3>

                    <button onClick={toggleOpen}>
                        MORE 
                        <span>
                            <ArrowDown />
                        </span>
                    </button>
                </MainText>

                <ExtraText isopen={isOpen}>
                        {
                            loading ? (
                                <h1>Carregando</h1>
                            ) : (
                                <>
                                    <span><h4>CURRENT TIMEZONE</h4> <h3>{timeAPIData?.timezone}</h3></span>
                                    <span><h4>DAY OF THE YEAR</h4> <h3>{timeAPIData?.day_of_year}</h3></span>
                                    <span><h4>DAY OF THE WEEK</h4>  <h3>{timeAPIData?.day_of_week}</h3></span>
                                    <span><h4>WEEK NUMBER</h4> <h3>{timeAPIData?.week_number}</h3></span>      
                                </>
                            )
                        }
                </ExtraText>
            </Wrapper>
        </Main>
    )
}