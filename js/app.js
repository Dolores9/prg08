console.log('ml5 version:', ml5.version);

const video = document.getElementById("webcam");
const label = document.getElementById("label");

const labelOneBtn = document.querySelector("#labelOne");
const labelTwoBtn = document.querySelector("#labelTwo");
const labelThreeBtn = document.querySelector("#labelThree");
const trainbtn = document.querySelector("#train");

labelOneBtn.addEventListener("click", () => console.log("button 1"));
labelTwoBtn.addEventListener("click", () => console.log("button 2"));
labelThreeBtn.addEventListener("click", () => console.log("button 3"));

trainbtn.addEventListener("click", () => console.log("train"));

if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
            video.srcObject = stream;
        })
        .catch((err) => {
            console.log("Something went wrong!");
        });
}

const image = document.getElementById('output')
const fileButton = document.querySelector("#file")

fileButton.addEventListener("change", (event)=>{
    image.src = URL.createObjectURL(event.target.files[0])
})

image.addEventListener('load', () => userImageUploaded())

function userImageUploaded(){
    console.log("The image is now visible in the DOM")
}

// label.innerText = "Ready when you are!";