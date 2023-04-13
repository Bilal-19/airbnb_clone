import React from "react"
import grid from "../images/photo_grid.png"

export default function Hero() {
    return (
        <section className="hero">
            <img src={grid} alt="grid" className="hero--image"/>
            <h1 className="hero--heading">Other Experiences</h1>
            <p className="hero--text">
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}