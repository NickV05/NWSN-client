const FileUpload1 = ({files1, setFiles1}) => {

  const handleFileChange = (e) => {
    const newFiles = [...e.target.files];
    setFiles1(newFiles);
  };

  const handleClear = () => {
    setFiles1([]);
  };

  return (
    <div>
      <div>
        {files1.map((file, index) => (
          <div key={index}>{file.name}</div>
        ))}
      </div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};

export default FileUpload1;