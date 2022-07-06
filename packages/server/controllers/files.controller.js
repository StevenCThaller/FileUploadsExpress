import path from 'path'

import { File } from '../models'

export const uploadFile = async (req, res) => {
  if(!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ error: "No files selected." })
  }

  
  // retrieve the file from the request
  const receivedFile = req.files.file
  // determine where to save it
  const uploadPath = path.join(__dirname, '../') + '/fileUploads/' + receivedFile.name
  
  // save it there
  receivedFile.mv(uploadPath, async function(err) {
    if(err) { 
      return res.status(400).json({ error: err })
    }

    await File.create({ filePath: `/fileUploads/${receivedFile.name}`})

    res.status(200).json({ message: "Success" })
  })
}

export const downloadFile = async (req, res) => {
  const { fileName } = req.params

  

  res.sendFile(path.join(__dirname, '../')+"/fileUploads/"+fileName)
}