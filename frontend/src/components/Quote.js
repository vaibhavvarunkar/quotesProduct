import React from 'react'
import "../assets/css/quote.css"
import plus from "../assets/images/plus.svg"
import share from "../assets/images/share.svg"
import copy from "../assets/images/copy.svg"

const Quote = ({ quote }) => {
    var auth = quote.Author.split(",")
    return (
        <div className="flex-col">
            <h4>{quote.Queote}</h4>
            <br></br>
            <div className="inner-quote-div">
                <p> - {auth[0]}</p>
                <div className="quote-icons">
                    <img src={plus}></img>
                    <img src={share}></img>
                    <img src={copy}></img>
                </div>
            </div>
        </div>
    )
}

export default Quote
