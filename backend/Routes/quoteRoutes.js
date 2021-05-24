import express from "express"
import Quote from "../models/quoteModel.js"
const router = express.Router()
import asyncHandler from "express-async-handler"

router.get("/", async (req, res) => {
    const pageSize = 10
    const total = await Quote.countDocuments({})
    const page = parseInt(req.query.page || 0)
    const quotes = await Quote.find({}).limit(pageSize).skip(pageSize * page)
    res.json({ total: Math.ceil(total / pageSize), quotes })
})

router.get("/:Tags", asyncHandler(async (req, res) => {
    const pageSize = 10
    const page = parseInt(req.query.page || 0)
    const quotess = await Quote.find({
        Tags: [req.params.Tags]
    }).limit(pageSize).skip(pageSize * page)
    res.json(quotess)
}))
export default router