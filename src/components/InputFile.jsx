import React, { useState } from 'react';

const InputFile = () => {
  const [fileData, setFileData] = useState({
    selectedFile: null,
    previewUrl: null,
  });

  const handleFileChange = (file) => {
    const blobUrl = URL.createObjectURL(file);

    setFileData({
      selectedFile: file,
      previewUrl: blobUrl,
    });
    console.log('Selected File:', file);
  };

  return (
    <div className='container text-center pt-2'>
      <label htmlFor="photo">Choose file....</label>
      <input
        type="file"
        id='photo'
        hidden
        onChange={(e) => handleFileChange(e.target.files[0])}
      />


      {fileData.previewUrl && (
        <div className='text-center mt-3'>
          <img src={fileData.previewUrl} alt="Preview" style={{ width: "600px", height: "350px" }} />
        </div>
      )}
    </div>
  );
}

export default InputFile;
