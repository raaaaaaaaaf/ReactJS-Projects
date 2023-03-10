import React from "react";

export default function Hero (props) {
    console.log(props);
    return (
        <section className="hero">
            <img src={props.item.img}  className="hero--img"/>
            <hr />
            <div className="hero--text">
                <span className="fa-solid fa-location-dot hero--icon"></span>
                &nbsp;
                <span className="hero--country">{props.item.country}</span>
                &nbsp; &nbsp;
                <span className="hero--googlelink">View on Google Maps </span>
                <h1 className="hero--title">{props.item.title}</h1>
                <h4 className="hero--date">{props.item.date}</h4>
                <p className="hero--description">{props.item.description}</p>
                
            </div>
        </section>
    )
}