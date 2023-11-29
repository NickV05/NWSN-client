import { useState } from 'react';

const FileUpload2 = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const newFiles = [...e.target.files];
    setFiles(newFiles);
  };

  const handleClear = () => {
    setFiles([]);
  };

  return (
    <div>
      <div>
        {files.map((file, index) => (
          <div key={index}>{file.name}</div>
        ))}
      </div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};

export default FileUpload2;