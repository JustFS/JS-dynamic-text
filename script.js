// window.onload = function() {

  const fileInput = document.getElementById('fileInput');
  const fileDisplay = document.getElementById('fileDisplay');


  fileInput.addEventListener('change', function(e) {
    
    const file = fileInput.files[0];
    const imageType = /image.*/;

    if (file.type.match(imageType)) {
      const reader = new FileReader();

      console.log(file.type);
      

      reader.onload = function(e) {
        
        // si jamais file note supported est écrit
        fileDisplay.innerHTML = "";

        const img = new Image();
        img.src = reader.result;

        fileDisplay.appendChild(img);
      }

      reader.readAsDataURL(file);	
    } else {
      fileDisplay.innerHTML = "File not supported!"
    }
  });
// };
