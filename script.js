//answer divs pull in
const formAnswers = document.getElementById('form-answers'),
    frame1 = document.getElementById('frame1'),
    frame2 = document.getElementById('frame2'),
    frame3 = document.getElementById('frame3'),
    widthAnswer1 = document.getElementById('widthAnswer1'),
    widthAnswer2 = document.getElementById('widthAnswer2'),
    widthAnswer3 = document.getElementById('widthAnswer3'),
    widthWallAnswer = document.getElementById('widthWallAnswer'),
    heightAnswer = document.getElementsByClassName('heightAnswer'),
    img1Container = document.getElementById('img-url-container-1'),
    img2Container = document.getElementById('img-url-container-2'),
    img3Container = document.getElementById('img-url-container-3'),
    img1 = document.getElementById('image-1'),
    img2 = document.getElementById('image-2'),
    img3 = document.getElementById('image-3'),
    cmText = document.querySelectorAll('.cm'),
    inchesText = document.querySelectorAll('.inches');



function hangFrame() {

    const frameHeight = parseFloat(document.getElementById('height').value);

    const frameWidth = parseFloat(document.getElementById('width').value);

    const hookTop = parseFloat(document.getElementById('hookTop').value);

    //frame specs pull in
    const numFrames = parseFloat(document.getElementById('numFrames').value);

    let unitConverter;

    //css issue with background
    document.getElementsByTagName('html')[0].style.height = 'auto';


    //checking inches vs cm
    if (document.getElementById('cenimeters').checked) {
        unitConverter = 2.54;
        //show cm and hide inches text
        for (let i = 0; i < cmText.length; i++) {
            cmText[i].classList.add('show');
        }

        for (let i = 0; i < inchesText.length; i++) {
            inchesText[i].classList.remove('show');
        }

    } else {
        unitConverter = 1;
        //show in and hide cm text
        for (let i = 0; i < cmText.length; i++) {
            inchesText[i].classList.add('show');
        }

        for (let i = 0; i < inchesText.length; i++) {
            cmText[i].classList.remove('show');
        }
    }


    // find out height to put in hook
    //height of frame/2
    const eyeHeight = 60 * unitConverter; //60 inches
    const middleHeight = frameHeight / 2;
    //60 inches + half frame height - hook position
    const hangNailHeight = (eyeHeight + middleHeight) - hookTop;

    //find middle of wall and display
    let wallWidth = parseFloat(document.getElementById('widthWall').value);
    wallWidth = wallWidth * unitConverter;
    const wallMiddle = wallWidth / 2;
    widthWallAnswer.innerHTML = wallWidth;


    // check where on the wall's width to hang nails based on how many frames they are hanging
    if (numFrames === 3) {
        //middle frame = middle of wall
        const middleFrame = wallMiddle;

        //left frame: middle of wall - width of frame - 1 inch
        const leftFrame = wallMiddle - frameWidth - (1 * unitConverter);

        //right frame: middle of wall + width of frame + 1 inch
        const rightFrame = wallMiddle + frameWidth + (1 * unitConverter);

        //show all 3 frames in answers

        formAnswers.classList.add('show');
        frame1.classList.add('show');
        frame2.classList.add('show');
        frame3.classList.add('show');
        img1Container.classList.add('show');
        img2Container.classList.add('show');
        img3Container.classList.add('show');
        heightAnswer[0].innerHTML = hangNailHeight;
        heightAnswer[1].innerHTML = hangNailHeight;
        heightAnswer[2].innerHTML = hangNailHeight;
        widthAnswer1.innerHTML = leftFrame;
        widthAnswer2.innerHTML = middleFrame;
        widthAnswer3.innerHTML = rightFrame;

        // console.log('three frames working');


    } else if (numFrames === 2) {
        //left frame: middle of wall - 1/2 width of frame - 0.5 inches
        const leftFrame = wallMiddle - (frameWidth / 2) - (0.5 * unitConverter);


        //right frame: middle of wall + 1/2 width of frame + 0.5 inches
        const rightFrame = wallMiddle + (frameWidth / 2) + (0.5 * unitConverter);

        //show 2 frames in answers
        formAnswers.classList.add('show');
        frame1.classList.add('show');
        frame2.classList.add('show');
        frame3.classList.remove('show');
        img1Container.classList.add('show');
        img2Container.classList.add('show');
        img3Container.classList.remove('show');
        heightAnswer[0].innerHTML = hangNailHeight;
        heightAnswer[1].innerHTML = hangNailHeight;
        widthAnswer1.innerHTML = leftFrame;
        widthAnswer2.innerHTML = rightFrame;

        // console.log('two frames working');

    } else {
        //only hanging 1 frame
        //middle of the wall measurement
        const middleFrame = wallMiddle;

        //show 1 frame in answers
        formAnswers.classList.add('show');
        frame1.classList.add('show');
        frame2.classList.remove('show');
        frame3.classList.remove('show');
        img1Container.classList.add('show');
        img2Container.classList.remove('show');
        img3Container.classList.remove('show');
        heightAnswer[0].innerHTML = hangNailHeight;
        widthAnswer1.innerHTML = middleFrame;

        // console.log('one frame working');
    }

} //end function

function imgShow() {
    const img1Input = document.getElementById('imginput-1').value;
    const img2Input = document.getElementById('imginput-2').value;

    const img3Input = document.getElementById('imginput-3').value;

    console.log(`this is image 1: ${img1Input}`);

    img1.style.backgroundImage = `url('${img1Input}')`;
    img2.style.backgroundImage = `url('${img2Input}')`;
    img3.style.backgroundImage = `url('${img3Input}')`;


}

//prevent forms from submitting
const form = document.getElementById("form");
const form2 = document.getElementById("form-imgs");

function handleForm(event) {
    event.preventDefault();
}
form.addEventListener('submit', handleForm);
form2.addEventListener('submit', handleForm);


//on click submit
document.getElementById('formSubmit').addEventListener('click', function() {
    hangFrame();
});


//on click img urls submit
document.getElementById('formSubmitImgs').addEventListener('click', function() {
    imgShow();
});