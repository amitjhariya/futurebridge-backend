import { Router } from "express";
import ContactRouter from './contact.js'

const router =Router()

router.get('/', (req, res) => {
    res.status(200).json({message:"success"})
})

router.use('/api/v1/contact', ContactRouter)

export default router