import express from 'express'
import cors from 'cors'
import router from './routes'
import path from 'path'
import fileUpload from 'express-fileupload'
import mongoose from 'mongoose'

const app = express()

mongoose.connect('mongodb://localhost/fileuploaddemo')
  .then(() => console.log("DB Connection successful"))
  .catch((err) => console.log("DB Connection failed:", err))


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'fileUploads')))
app.use(fileUpload())


app.use('/api', router)

app.listen(8000, () => console.log("Now listening on port 8000"))