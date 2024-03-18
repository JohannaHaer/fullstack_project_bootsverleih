import mongoose, { Schema } from "mongoose"

const reservierungSchema = new Schema({
    startDatum: {
        type: String,
        required: true,
    },
    endDatum: {
        type: String,
        required: true,
    },
    boot: {
        type: mongoose.Types.ObjectId,
        ref: 'Boot',
        // required: true,
    },
    name: {
        type: String,
        
    }
})

export const Reservierung = mongoose.model('Reservierung', reservierungSchema)