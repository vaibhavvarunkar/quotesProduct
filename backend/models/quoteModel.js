import mongoose from "mongoose"

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
        }
    }
)

const Quote = mongoose.model("Quote", quoteSchema)
export default Quote