var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc = 'images/capture1.png') {
        myImage.setAttribute ('src','images/capture3.png');
    } else {
        myImage.setAttribute ('src','images/capture1.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');
function setUserName() {
    var myName = prompt('please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Shinchan; who is he?, ' + myName;
}
if(!localStorage.getItem('name')){
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Shinchan; who is he?, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}