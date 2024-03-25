function getFileName(file){
  if (file.indexOf(".") === -1) {
    return file;
  } 
  else {
    return file.slice(0, file.indexOf("."));
  }
}
console.log(getFileName("filecom"));
