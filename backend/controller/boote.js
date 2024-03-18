import express from 'express'
import multer from 'multer'
import { Boot } from '../model/boot.js'


const router = express.Router()
const mult = multer()

router.get('/boote', async (req, res) => {
    const boote = await Boot.find().lean()
    res.json
})

router.post('/boote', mult.single('image'), async (req, res) => {
    const newBoot = new Boot({
        content: req.body
    })
    const saveResult = await newBoot.save(
        res.status(201).json(saveResult)
    )
})

export default router