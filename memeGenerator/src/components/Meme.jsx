import React from "react";
import Data from "./Data";


export default function Meme () {

    const [memeImage, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemeImages, setAllMemeImages] = React.useState(Data)

    function getMeme(){
        const arr = allMemeImages.data.memes 
        const random = Math.floor(Math.random() * arr.length)
        const url = arr[random].url
        setMemeImage(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    return(
        <main>
            <div className="form">
                <input className="form--input" type="text" placeholder="Top Text"/>
                <input className="form--input" type="text" placeholder="Bottom Text"/>
                <button className="form--btn"
                onClick={getMeme}
                >Get a new meme image 🖼
                </button>
            </div>
            <img src={memeImage.randomImage} className="meme--img"/>

        </main>
    )

}