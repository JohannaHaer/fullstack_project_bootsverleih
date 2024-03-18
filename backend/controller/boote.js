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
    const bootNr = Math.floor(Math.random() * 99999)
    const bootGesamt = {...bootInputData, bootNr}
    const newBoot = new Boot(bootGesamt)
    const saveResult = await newBoot.save()
    res.status(201).json(saveResult)
})

export default router