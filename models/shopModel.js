const mongoose = require("mongoose");

const showSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        categories: {
            type: [String],
            required: true,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        items: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: "Item",
            
        }
    }
)