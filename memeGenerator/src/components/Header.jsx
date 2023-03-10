import React from "react";

export default function Header() {
    return (
        <header>
            <img src="./src/assets/troll-face.png" className="header--img"/>
            <span className="header--title">MemeGenerator</span>
            <span className="header--text">React Course - Project 3</span>
        </header>
    )
}