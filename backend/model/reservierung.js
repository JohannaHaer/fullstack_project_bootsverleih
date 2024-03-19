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
        required: true,
    },
})

export const Reservierung = mongoose.model('Reservierung', reservierungSchema)