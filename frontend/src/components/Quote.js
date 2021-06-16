import React, { useState } from 'react'
import "../assets/css/quote.css"
import plus from "../assets/images/plus.svg"
import share from "../assets/images/share.svg"
import copy from "../assets/images/copy.svg"
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
// import fb from "../assets/images/fb.svg"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Quote = ({ quote }) => {

    const [quoteArray, setQuoteArray] = useState([])

    var auth = quote.Author.split(",")
    const copyContent = (quoteData, authorName) => {
        console.log(quoteData, authorName);
        /* Get the text field */
        var input = document.getElementById("copy");
        // input.type = "text"
        input.value = quoteData + " - " + authorName

        /* Select the text field */
        input.select();
        // input.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        // document.execCommand("copy");
        var successful = document.execCommand('copy');
        console.log(successful);
        input.remove()

    }

    const addToFav = (id, quote, author) => {
        console.log("called");
        console.log(id);
        obj = {
            id: id,
            quote: quote,
            author: author
        }
        quoteArray.push(obj)
    }


    console.log(quoteArray);
    const handleCreate = (name) => {

    }

    const groupName = () => {

    }

    var obj = {
        id: "",
        quote: "",
        author: ""
    }

    const [popInput, setPopInput] = useState(false)
    return (
        <div className="flex-col">
            <h4 id="quote">{quote.Queote}</h4>
            <input id="copy" type="text"></input>
            <br></br>
            <div className="inner-quote-div">
                <p id="author"> - {auth[0]}</p>
                <div className="quote-icons">
                    <Popup trigger={<img src={plus} onClick={addToFav(quote._id, quote.Queote, auth)}></img>} position="bottom center">
                        <div>
                            <p className="popup-p1">save to...</p>
                            {
                                popInput ? <></>
                                    :
                                    <p onClick={() => setPopInput(!popInput)} className="popup-p"><span>+</span> Create New</p>
                            }
                            {
                                popInput ? <>
                                    <input className="popup-input" placeholder="Group Name" onChange={groupName}></input>
                                    <a className="popup-submit" onClick={() => handleCreate()}>Create</a>
                                </>
                                    : <></>
                            }
                        </div>
                    </Popup>
                    <img src={share}></img>
                    <Tippy content="Copy" delay="100" theme="light">
                        <img data-tippy-delay="[1000, 200]" src={copy} onClick={() => copyContent(quote.Queote, auth[0])}></img>
                    </Tippy>
                </div>
            </div>
        </div>
    )
}

export default Quote
