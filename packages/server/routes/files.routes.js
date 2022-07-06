import { Router } from 'express'
import { uploadFile, downloadFile } from '../controllers/files.controller'

const router = Router()

router.route('/')
  .post(uploadFile)

router.route('/:fileName')
  .get(downloadFile)

export default router