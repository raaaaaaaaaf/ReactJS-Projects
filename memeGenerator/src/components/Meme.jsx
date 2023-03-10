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

    function handleChange(event){
        const {name, value, type, checked} = event.target
        setMemeImage(prevMeme => ({
            ...prevMeme,
            [name]: type === "checkbox" ? checked : value
        }))
    }
    return(
        <main>
            <div className="form">
                <input className="form--input" type="text" placeholder="Top Text" name="topText" value={memeImage.topText} onChange={handleChange}/>
                <input className="form--input" type="text" placeholder="Bottom Text" name="bottomText" value={memeImage.bottomText} onChange={handleChange}/>
                <button className="form--btn"
                onClick={getMeme}
                >Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={memeImage.randomImage} className="meme--image" />
                <h2 className="meme--text top">{memeImage.topText}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
            </div>

        </main>
    )

}