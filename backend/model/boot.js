import mongoose, { Schema } from "mongoose"

const bootSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    seriennummer: {
        type: String,
        required: true,
    },
    baujahr: {
        type: Number,
        required: true,
    }
})

export const Boot = mongoose.model('Boot', bootSchema)