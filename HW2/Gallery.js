var images = [ "1.png", "2.png", "3.png", "4.png", "5.png", "6.png" ];
var currIndex = 0;
var currImg = document.getElementById("currImg");
var backBtn = document.getElementById("backBtn");
var nextBtn = document.getElementById("nextBtn");
function upGallery()
{
    currImg.src = images[currIndex];
    backBtn.disabled = currIndex === 0;
    nextBtn.disabled = currIndex === images.length - 1;
}
function showBack()
{
    if(currIndex > 0)
    {
        currIndex--;
        upGallery();
    }
}
function showNext()
{
    if(currIndex < images.length - 1)
    {
        currIndex++;
        upGallery();
    }
}
upGallery();
