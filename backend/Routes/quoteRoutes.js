import express from "express"
import Quote from "../models/quoteModel.js"
const router = express.Router()

router.get("/", async (req, res) => {
    const pageSize = 9
    const total = await Quote.countDocuments({})
    const page = parseInt(req.query.page || 0)
    // const quotes = await Quote.find({}).limit(pageSize).skip(pageSize * page)
    const quotes = await Quote.find({}).limit(pageSize + page)
    res.json({ quotes })
    // console.log(quotes);
})

router.get("/search", async (req, res) => {
    const q = req.query.q
    const pageSize = 9
    const page = parseInt(req.query.page || 0)
    const quotess = await Quote.find({
        $text: {
            $search: q
        }
    }).limit(pageSize + page)
    // console.log(quotess)
    res.json(quotess)
})
export default router