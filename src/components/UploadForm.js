import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  // const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    setFile(null)
    let selected = e.target.files[0]
    console.log(selected)

    if (!selected) {
      setError('Please select a file')
      return
    }
    if (!selected.type.includes('image')) {
      setError('Selected file must be an image')
      return
    }
    if (selected.size > 100000000) {
      setError('Image file size must be less than 10000kb')
      return
    }
    
    setError(null)
    setFile(selected)
    console.log('thumbnail updated')
  }

  return (
    <form>
      <label>
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={setFile} /> }
      </div>
    </form>
  );
}

export default UploadForm;