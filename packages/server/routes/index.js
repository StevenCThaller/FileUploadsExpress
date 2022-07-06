import express from 'express'
import fileRouter from './files.routes'

const router = express.Router()

router.use('/files', fileRouter)

export default router