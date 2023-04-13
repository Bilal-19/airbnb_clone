import React from "react"
import Navbar from "./Components/Navbar" //importing first component
import Hero from "./Components/Hero" //importing second component
import Card from "./Components/Card" //importing third component
import data from "./data"
import './App.css'

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                //passing the properties
                key={item.id}
                {...item} // spread object syntax  
            />
        )
    })

    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards--list">
                {cards}
            </section>
        </div>
    )
}