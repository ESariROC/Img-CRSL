console.log('imgcarrousel.js')

const allImages = document.querySelectorAll('.img-carrousel');
const nextBtn =  document.querySelector('.control-unit.volgende');
const prevBtn = document.querySelector('.control-unit.vorige');

nextBtn.addEventListener('click', function() {
    let imgNum = -5;
    let nextImg;
    for (let i = 0; i < allImages.length; i++) {
        const controlImg = allImages[i];
        if (controlImg.classList.contains('active')) {
            imgNum = i;
            nextImg = imgNum + 1;
        }
        
        if (nextImg >= allImages.length) {
            nextImg = 0;
        }
    }

    allImages[imgNum].classList.remove('active');
    allImages[nextImg].classList.add('active');

});

prevBtn.addEventListener('click', function() {
    let imgNum = -5;
    let nextImg;
    for (let i = 0; i < allImages.length; i++) {
        const controlImg = allImages[i];
        if (controlImg.classList.contains('active')) {
            imgNum = i;
            nextImg = imgNum - 1;
        }
        
        if (nextImg < 0) {
            nextImg = allImages.length - 1;
        }
    }

    console.log(nextImg);
    console.log(imgNum);
    allImages[imgNum].classList.remove('active');
    allImages[nextImg].classList.add('active');

});