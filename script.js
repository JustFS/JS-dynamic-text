const fileInput = document.getElementById('fileInput');
const fileDisplay = document.getElementById('fileDisplay');

fileInput.addEventListener('change', function() {

  const file = fileInput.files[0];
  const imageType= /image.*/;

  // Check image format
  if (file.type.match(imageType)) {
    
    // Take off error text if it stands on the DOM
    fileDisplay.innerHTML= "";
    
    // create new Object from constructor FileReader
    const fileReader = new FileReader();

    fileReader.onload = function() {
      // constructor Image() is exaclty like "document.createElement('img')"
      const img = new Image();

      img.src = fileReader.result;
      fileDisplay.appendChild(img);
    };

    fileReader.readAsDataURL(file);

  } else {
    fileDisplay.innerHTML = "File not supported";
  }
});