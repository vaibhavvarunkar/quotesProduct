import mongoose from "mongoose"
// import slugify from "slugify"

const quoteSchema = mongoose.Schema(
    {
        Queote: {
            type: String,
            required: true
        },
        Author: {
            type: String,
            required: true
        },
        Tags: {
            type: String,
            required: true
        },
    }
)



quoteSchema.index({ "$**": "text" })

const Quote = mongoose.model("Quote", quoteSchema)
export default Quote