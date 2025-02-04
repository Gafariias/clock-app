import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { Main } from "./styles";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";
import themeTS from "../../types/theme";

interface props {
    onData(theme: themeTS): void
}

export default function Home(p: props) {
    const [theme, setTheme] = useState(light)
    const [date, setDate] = useState(new Date());
      
    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    }, []);

    const tick = useCallback(() => {
        setDate(new Date());

        date.getHours() > 19 ? setTheme(dark) : setTheme(light)
        p.onData(theme)
    }, []);

    const timeString = date;
    
    return(
        <Main className={theme.title == "light" ? "daytime" : "nighttime"}>
            
        </Main>
    )
}