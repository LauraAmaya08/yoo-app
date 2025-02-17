import React, { useState, useEffect } from "react";
import useTheme from "./useTheme";
import DarkIcon from '../assets/img/darkIcons/toggle.png'; 
import LightIcon from '../assets/img/lightIcons/toggle.png';  

const ThemeToggleButton = () => {
    const { toggleTheme, theme } = useTheme();
    const [icon, setIcon] = useState(theme === "dark" ? DarkIcon : LightIcon);


    useEffect(() => {
        if (theme === "dark") {
            setIcon(DarkIcon); 
        } else {
            setIcon(LightIcon); 
        }
    }, [theme]);

    return (
        <button onClick={toggleTheme} aria-label="Cambiar tema">
            <img src={icon} alt="Cambiar modo" className="w-8 h-8 object-contain" />
        </button>
    );
};

export default ThemeToggleButton;

