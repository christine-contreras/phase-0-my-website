console.log('hello world!');

//frame specs pull in
const numFrames = document.getElementById('numFrames').value;

const frameHeight = parseFloat(document.getElementById('height').value);

const frameWidth = parseFloat(document.getElementById('width').value);

const hookTop = parseFloat(document.getElementById('hookTop').value);




//find middle of wall
const wallWidth = parseFloat(document.getElementById('widthWall').value);
//hang at the middle if 1 and 3 frames
const wallMiddle = wallWidth / 2;

// check where on the wall's width to hang nails based on how many frames they are hanging
if (numFrames === 3) {
    //middle frame = middle of wall 

    //left frame: middle of wall - width of frame - 1 inch

    //right frame: middle of wall + width of frame + 1 inch


} else if (numFrames === 2){
    //right frame: middle of wall + 1/2 width of frame + 0.5 inches

    //left frame: middle of wall - 1/2 width of frame - 0.5 inches

} else {
    //only hanging 1 frame
    //middle of the wall measurement

}


// find out height to put in hook
//height of frame/2
const eyeHeight = 60; //60 inches
const middleHeight = frameHeight / 2;
//60 inches + half frame height - hook position
const hangNailHeight = (eyeHeight + middleHeight) - hookTop;



//check if user is using in
if (document.getElementById('inches').checked) {
    //multiply by 2.54 to convert to cm 
 } 
 