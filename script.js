/**
 * @description function used to add/remove classlist for buttons and progress bar.
 * 
 */
function startProgress(){
  document.getElementById("progressBar").classList.add("visible-progress-bar");
  document.getElementById("uploadButton").classList.add("disable-button");
  document.getElementById("downloadButton").classList.add("disable-button");

  setTimeout(()=>{
    document.getElementById("progressBar").classList.remove("visible-progress-bar");
    document.getElementById("uploadButton").classList.remove("disable-button");
    document.getElementById("downloadButton").classList.remove("disable-button");
  }, 4 * 1000);
}