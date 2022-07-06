import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [file, setFile] = useState()

  const handleChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    console.log(file)
    formData.append('file', file)
    formData.append('fileName', file.name)

    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }

    axios.post('http://localhost:8000/api/files', formData, config)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="App">
      <h1>Let's upload some files!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Choose Files to Upload:
          <input type="file" onChange={handleChange}/>
          <button type="submit">Upload File</button>
        </label>
      </form>

      {/* <a href="http://localhost:8000/api/files/todoodle-logo.png" download>Download That Logo We Just Uploaded</a> */}

      <img src="http://localhost:8000/api/files/todoodle-logo.png" />
    </div>
  );
}

export default App;
