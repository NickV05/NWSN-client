const FileUpload2 = ({files2, setFiles2}) => {
  
  const handleFileChange = (e) => {
    const newFiles = [...e.target.files];
    setFiles2(newFiles);
  };

  const handleClear = () => {
    setFiles2([]);
  };

  return (
    <div>
      <div>
        {files2.map((file, index) => (
          <div key={index}>{file.name}</div>
        ))}
      </div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};

export default FileUpload2;