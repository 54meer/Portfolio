import React from "react";
import Sun from '../../Assets/Sun.svg?react';
import Moon  from '../../Assets/Moon.svg?react';
import "./Theme.css";

const Theme = () => {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark')
        localStorage.setItem("selectedTheme", "dark")
    }

    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light')
        localStorage.setItem("selectedTheme", "light")
    }

    const selectedTheme = localStorage.getItem("selectedTheme")

    if (selectedTheme === "dark") setDarkMode();

    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    }

    return (
        <div className='theme-changer'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                defaultChecked={selectedTheme === "dark"}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default Theme;
