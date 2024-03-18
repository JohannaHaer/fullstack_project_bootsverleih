import express from 'express'
import multer from 'multer'
import { Boot } from '../model/boot.js'


const router = express.Router()
const mult = multer()

router.get('/', async (req, res) => {
    const boote = await Boot.find().lean()
    res.json(boote)
})

router.post('/', mult.none(), async (req, res) => {
    const bootInputData = req.body
    const newBoot = new Boot(bootInputData)
    const saveResult = await newBoot.save()
    res.status(201).json(saveResult)
})

export default router