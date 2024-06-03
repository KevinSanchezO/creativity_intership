import { createContext, useState } from "react";

export const ScreenContext = createContext(null);

const ScreenProvider = ({ children }) => {
    const [screen, setScreen] = useState(["empty"]);

    const pushScreen = (newScreen) => {
        setScreen((prevScreen) => [...prevScreen, newScreen]);
    };

    const popScreen = () => {
        setScreen((prevScreen) => prevScreen.slice(0, -1));
    };

    const currentScreen = screen[screen.length - 1];

    const data = {
        screen,
        setScreen,
        currentScreen,
        pushScreen,
        popScreen,
    }

    return (
        <ScreenContext.Provider value={data}>
            {children}
        </ScreenContext.Provider>
    )
}

export { ScreenProvider };