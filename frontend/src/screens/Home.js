import React, { useState, useEffect } from 'react'
import axios from "axios"
import Navbar from '../components/Navbar'
import "../assets/css/home.css"
import search from "../assets/images/search.svg"
import { Link } from 'react-router-dom'
import Quote from '../components/Quote'
import "../assets/css/quote.css"
import expressAsyncHandler from 'express-async-handler'

const Home = () => {
    const [quotes, setQuotes] = useState([])
    var [pageNumber, setPageNumber] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [searchTerm, setSearchTerm] = useState("")
    const [loadMore, setLoadMore] = useState(false)

    const pages = new Array(totalPages).fill(null).map((v, i) => i)

    const searchFunc = () => {
        setQuotes([])
        // setPageNumber(0)
        const fetchQueryQuotes = async () => {
            const { data } = await axios.get(`http://localhost:5000/quotes/search/?q=${searchTerm}&page=${pageNumber = 0}`)
            setQuotes(data)
        }
        fetchQueryQuotes()
        setLoadMore(true)
    }

    // const gotoPrevious = () => {
    //     if (searchTerm !== "") {
    //         setPageNumber(Math.max(0, pageNumber - 1))
    //         const fetchQueryQuotes = async () => {
    //             const { data } = await axios.get(`http://localhost:5000/quotes/search/?q=${searchTerm}&page=${pageNumber - 1}`)
    //             setQuotes(data)
    //         }
    //         fetchQueryQuotes()
    //         window.scrollTo(0, 0)
    //     } else {
    //         setPageNumber(Math.max(0, pageNumber - 1))
    //     }
    // }

    const gotoNext = () => {
        if (searchTerm !== "") {
            setPageNumber(Math.max(0, pageNumber + 9))
            const fetchQueryQuotes = async () => {
                const { data } = await axios.get(`http://localhost:5000/quotes/search/?q=${searchTerm}&page=${pageNumber + 9}`)
                setQuotes(data)
            }

            fetchQueryQuotes()
            // window.scrollTo(0, 0)
        } else {
            setPageNumber(Math.max(0, pageNumber + 1))
        }

    }

    // useEffect(() => {
    //     if (searchTerm === "") {
    //         const fetchQuotes = async () => {
    //             const { data } = await axios.get(`http://localhost:5000/quotes?page=${pageNumber}`)
    //             setQuotes(data.quotes)
    //             setTotalPages(data.total)
    //         }
    //         fetchQuotes()
    //         window.scrollTo(0, 0)
    //     }
    // }, [pageNumber])

    const handleKeyChange = (e) => {
        if (e.keyCode === 13) {
            searchFunc()
        }
    }

    return (
        <>
            <Navbar />
            <div className="header">
                {/* <div className="colors">
                    <span class="dot dot1"></span>
                    <span class="dot dot2"></span>
                    <span class="dot dot3"></span>
                    <span class="dot dot4"></span>
                </div> */}
                <div className="showcase">
                    <h1>get inspired</h1>
                    <div className="searchBar">
                        <div className="logo-div">
                            <img className="search-logo" for="search" src={search}></img>
                        </div>
                        <input placeholder="Search quotes by keyword, author" value={searchTerm} onKeyDown={handleKeyChange} onChange={(e) => setSearchTerm(e.target.value)}></input>
                    </div>
                    {/* <div className="random-quote">
                        <p>Two things are infinite; the universe and human stupidity; and I'm not sure about the universe. - <span>Albert Einstine</span></p>
                    </div> */}
                </div>
            </div>




            <div className="quote-div">
                {
                    quotes.length > 0 ? <>   {
                        quotes.map((quote) => {
                            return (
                                <Quote quote={quote} />
                            )
                        })
                    }</>
                        : null
                }
            </div>

            {
                loadMore ? <>
                    <div className="load-more">
                        <a onClick={gotoNext}>Load More</a>
                    </div>
                </> : <></>
            }

            <div className="bottom-line">
                <p><span><Link className="bottom-line-line">Sign Up</Link></span> to access all the quotes for free</p>
            </div>

        </>
    )
}

export default Home


