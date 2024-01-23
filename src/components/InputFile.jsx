import React, { useState } from 'react';

const InputFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (file) => {
    const blobUrl = URL.createObjectURL(file);

    setSelectedFile(file);
    setPreviewUrl(blobUrl);
    console.log('Selected File:', file);
  };

  return (
    <div className='container text-center'>
      <label htmlFor="photo">Choose file....</label>
      <input
        type="file"
        id='photo'
        hidden
        onChange={(e) => handleFileChange(e.target.files[0])}
      />
      {previewUrl && (
        <div className='text-center mt-3'>
          <img src={previewUrl} alt="Preview" style={{ width: "100%", height: "100%" }} />
        </div>
      )}
    </div>
  );
}

export default InputFile;
