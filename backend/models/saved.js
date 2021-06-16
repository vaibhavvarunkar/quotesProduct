import mongoose from "momngoose"

const savedSchema = mongoose.Schema(
    {
        groupName: {
            type: String,
            required: true
        },
        quotes: [
            {
                quote: String,
                author: String,
            }
        ],
        userId: {
            type: Number,
            required: true
        },
    }
)

const Saved = mongoose.model("Saved", savedSchema)
export default Saved




