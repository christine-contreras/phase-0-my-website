console.log('hello world!');

//frame specs pull in
const numFrames = document.getElementById('numFrames').value;

const frameHeight = parseFloat(document.getElementById('height').value);

const frameWidth = parseFloat(document.getElementById('width').value);

const hookTop = parseFloat(document.getElementById('hookTop').value);


//answer divs pull in
const formAnswers = document.getElementById('form-answers'),
numFramesAnswer = document.getElementById('numFrameAnswer'),
frame1 = document.getElementById('frame1'),
frame2 = document.getElementById('frame2'),
frame3 = document.getElementById('frame3'),
widthAnswer1 = document.getElementById('widthAnswer1'),
widthAnswer2 = document.getElementById('widthAnswer2'),
widthAnswer3 = document.getElementById('widthAnswer3'),
heightAnswer = document.getElementsByClassName('heightAnswer');


function hangFrame() {
    // find out height to put in hook
    //height of frame/2
    const eyeHeight = 60; //60 inches
    const middleHeight = frameHeight / 2;
    //60 inches + half frame height - hook position
    const hangNailHeight = (eyeHeight + middleHeight) - hookTop;


    //find middle of wall
    const wallWidth = parseFloat(document.getElementById('widthWall').value);
    const wallMiddle = wallWidth / 2;
    console.log(wallMiddle);

    // check where on the wall's width to hang nails based on how many frames they are hanging
    if (numFrames === 3) {
        //middle frame = middle of wall
        const middleFrame = wallMiddle;

        //left frame: middle of wall - width of frame - 1 inch
        const leftFrame = wallMiddle - frameWidth - 1;

        //right frame: middle of wall + width of frame + 1 inch
        const rightFrame = wallMiddle + frameWidth + 1;

        //show all 3 frames in answers
        


    } else if (numFrames === 2) {
        //left frame: middle of wall - 1/2 width of frame - 0.5 inches
        const leftFrame = wallMiddle - (frameWidth / 2) - 0.5;


        //right frame: middle of wall + 1/2 width of frame + 0.5 inches
        const rightFrame = wallMiddle + (frameWidth / 2) + 0.5;

    } else {
        //only hanging 1 frame
        //middle of the wall measurement
        const middleFrame = wallMiddle;
    }   

} //end function



//check if user is using in
if (document.getElementById('inches').checked) {
    //run function
} else {
    //need to convert to cm

}
