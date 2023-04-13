import React from "react"
import brand from "../images/airbnb_logo.png"

export default function Navbar() {
    return (
        <nav>
            <img id="nav--logo" src={brand} alt="Airbnb logo"/>
        </nav>
    )
}