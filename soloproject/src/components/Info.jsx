import React from "react";

function Info(){
    return(
        <div className="info">
            <img src="./src/assets/profile.png"></img>
            <div className="info--profile">
                <h1>Raffy Jay Ridad</h1>
                <h3>Aspiring Developer</h3>
                <h4>itsmeraaaf.website</h4>
                <div className="btn">
                <button className="email">Email</button>
                <button className="linkedin">LinkedIn</button>
                </div>
                <div className="about">
                    <h2 className="about--title">About</h2>
                    <p className="about--paragraph">I am a full stack developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                </div>
                <div className="interests">
                    <h2>Interests</h2>
                    <p>Investing, Music Scholar, Gaming, Internet fanatic, Food addict, Travel geek, Electronic culture ninja, Bear Fanatic.</p>
                </div>
                <div className="footer">
                <a><ion-icon name="logo-facebook"></ion-icon></a>
                <a><ion-icon name="logo-twitter"></ion-icon></a>
                <a><ion-icon name="logo-instagram"></ion-icon></a>
                <a><ion-icon name="logo-github"></ion-icon></a>
                </div>
            </div>

        </div>
    )
}

export default Info