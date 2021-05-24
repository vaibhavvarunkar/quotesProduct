import React, { useState, useEffect } from 'react'
import axios from "axios"
import { set } from 'mongoose'
const Home = () => {
    const [quotes, setQuotes] = useState([])
    const [pageNumber, setPageNumber] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [searchTerm, setSearchTerm] = useState(null)

    const pages = new Array(totalPages).fill(null).map((v, i) => i)

    const searchFunc = () => {
        setQuotes([])
        setPageNumber(0)
        const fetchQueryQuotes = async () => {
            const { data } = await axios.get(`http://localhost:5000/quotes/${searchTerm}?page=${pageNumber}`)
            setQuotes(data)
        }
        fetchQueryQuotes()


    }

    const gotoPrevious = () => {
        if (searchTerm !== null) {
            setPageNumber(Math.max(0, pageNumber - 1))
            const fetchQueryQuotes = async () => {
                const { data } = await axios.get(`http://localhost:5000/quotes/${searchTerm}?page=${pageNumber - 1}`)
                setQuotes(data)
            }
            fetchQueryQuotes()
            window.scrollTo(0, 0)
        } else {
            setPageNumber(Math.max(0, pageNumber - 1))
        }
    }

    const gotoNext = () => {
        if (searchTerm !== null) {
            setPageNumber(Math.max(0, pageNumber + 1))
            const fetchQueryQuotes = async () => {
                const { data } = await axios.get(`http://localhost:5000/quotes/${searchTerm}?page=${pageNumber + 1}`)
                setQuotes(data)
            }

            fetchQueryQuotes()
            window.scrollTo(0, 0)
        } else {
            setPageNumber(Math.max(0, pageNumber + 1))
        }

    }

    useEffect(() => {
        if (searchTerm === null) {
            const fetchQuotes = async () => {
                const { data } = await axios.get(`http://localhost:5000/quotes?page=${pageNumber}`)
                setQuotes(data.quotes)
                setTotalPages(data.total)
            }
            fetchQuotes()
            window.scrollTo(0, 0)
        }
    }, [pageNumber])

    return (

        <div>
            <div className="searchbar">
                <input type="text" value={searchTerm} onChange={((e) => setSearchTerm(e.target.value))} placeholder="Search by keywords eg. life, love, motivation"></input>
                <button onClick={searchFunc}>Search</button>
            </div>
            <h1 className="title">Quotes</h1>
            <h1 className="page">Page {pageNumber + 1}</h1>
            {quotes.map((quote, index) => {
                return (
                    <div className="main">
                        <div className="quote-div" key={quote._id}>
                            <h3>{index + 1}</h3>
                            <h3>{quote.Queote} </h3><h4>{quote.Author}</h4>
                            <p>{quote.Tags}</p>
                            <br></br>
                        </div>
                    </div>
                )

            })}
            <button onClick={gotoPrevious}>Prev</button>
            <button onClick={gotoNext}>Next</button>
        </div>
    )
}


export default Home


