const fileInput = document.getElementById('fileInput');
const fileDisplay = document.getElementById('fileDisplay');

fileInput.addEventListener('change', function(){

  const file = fileInput.files[0];
  const imageType = /image.*/;

  // condition pour savoir si l'image est au bon format
  if (file.type.match(imageType)) {
    // si jamais "fichier non supporté" est affiché
    fileDisplay.innerHTML = "";

    const fileReader = new FileReader();

    fileReader.onload = function() {
      const img = new Image();
      
      img.src = fileReader.result;
      fileDisplay.appendChild(img);
    };

    fileReader.readAsDataURL(file);

  } else {
    fileDisplay.innerHTML = "Fichier non supporté !";
  }
});