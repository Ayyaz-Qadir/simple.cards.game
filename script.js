$("img").attr("src", "./images/que_icon.svg");

var chooseImage = ["0","1","2","3","4","5","6","7","0","1","2","3","4","5","6","7",];
var firstImage = null;
var secondImage = null;
chooseImage = shuffle(chooseImage);

// Add click event listener to all image-div elements
$(".image-div").click(function () {
  // Get the index of the clicked image
  var index = $(this).index();
  
  // Change the clicked image to the corresponding image from chooseImage array
  if (firstImage === null) {
    $(this).children("img").attr("src", "./images/img-" + chooseImage[index] + ".png");
    $(this).closest(".image-div").addClass("rotate");
    firstImage = $(this).children("img");
  } else {
    $(this).children("img").attr("src", "./images/img-" + chooseImage[index] + ".png");
    $(this).closest(".image-div").addClass("rotate");
    secondImage = $(this).children("img");
    
    if (firstImage.attr("src") === secondImage.attr("src")) {
      console.log("both true condition");
      // Do something when the images match
      firstImage.parent().off("click");
      secondImage.parent().off("click");
    } else {
      flip();
      rotate();
      console.log("else condition true");
    }
    firstImage = null;
    secondImage = null;
  }
});

function flip() {
  // Store references to firstImage and secondImage before setTimeout
  var $firstImg = firstImage;
  var $secondImg = secondImage;
  setTimeout(function () {
    $firstImg.attr("src", "./images/que_icon.svg");
    $secondImg.attr("src", "./images/que_icon.svg");
  }, 400);
}

function rotate(){
  var $firstImg = firstImage;
  var $secondImg = secondImage;
  setTimeout(function () {
    $firstImg.parent().removeClass("rotate");
    $secondImg.parent().removeClass("rotate");
  }, 400);
}


function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}