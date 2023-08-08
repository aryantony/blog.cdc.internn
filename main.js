window.addEventListener("load", function() {
    // Hide the loader and show the content after all images are loaded
    const loaderWrapper = document.querySelector(".loader-wrapper");
    const content = document.querySelector(".content");
  
    // Simulating a delay for demonstration purposes (remove this in a real implementation)
    setTimeout(function() {
      loaderWrapper.style.display = "none";
      content.style.display = "block";
    }, 2000); // Adjust the time as needed
  });
  