/* exported imageObjectsArray */

const imageObjectsArray = [
    { name: 'images/bag.jpg',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/banana.jpg',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/bathroom.jpg',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/boots.jpg',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/breakfast.jpg',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/bubblegum.jpg',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/chair.jpg',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/cthulhu.jpg',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/dog-duck.jpg',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/dragon.jpg',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/pen.jpg',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/pet-sweep.jpg',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/images/scissors.jpg',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/shark.jpg',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/sweep.png',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/tauntaun.jpg',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/unicorn.jpg',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/usb.gif',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/water-can.jpg',
        chosen: 0,
        displayed: 0
    }, {
        name: 'images/wine-glass.jpg',
        chosen: 0,
        displayed: 0
    }];


    for(let i = 0; i < 3; i++) {

        // get a random integer between 0 and length of images array
        var randomNum = Math.floor((Math.random() * imageObjectsArray.length));
    
        console.log('number', randomNum);
    
        // var currentImage = new Image(imageObjectsArray[randomNum]);
    
        // splice out used images from imagesArray 
        // imagesArray.splice(randomNum, 1);
    }