

const data = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1WWsFw1SwtU1jSQadiryBWNQBnmvAyvJZdl1Jz3v5mQ&s",
    "https://img.freepik.com/free-photo/group-portrait-five-adorable-puppies_53876-64839.jpg?w=900&t=st=1702894597~exp=1702895197~hmac=ffa6bb668963e7269953bb23402e14213fa6fae00c34333cec4d43fc23be32a6",
    "https://img.freepik.com/free-photo/portrait-beagle-puppies-grey_155003-41061.jpg?w=740&t=st=1702894646~exp=1702895246~hmac=dbbbeeff9e74815e51b8d6b1513e084421cb015c3a6de280eb47ca5eaed2984d"
]

var carousel = document.querySelector(".carousel");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var img = document.querySelector("img");

var currentIndex = 0;

const updateImage = () => {
    img.src = data[currentIndex];
}
updateImage();

// data.forEach((item,i) => {
//     img.src = item;
// })
function nextImage() {
    currentIndex = (currentIndex + 1) % data.length;
    updateImage();
}
next.addEventListener("click", function () {
    nextImage();
})

prev.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + data.length) % data.length;
    updateImage();
})

const startSlideShow = () => {
    setInterval(function () {
        nextImage();
    }, 5000);
}

startSlideShow();






