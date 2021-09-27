window.addEventListener('DOMContentLoaded', function () {
    console.log('loaded');

    let imgCount = 0
    let images = document.querySelectorAll('.header-img');
    let dots = document.querySelectorAll('.dot');
    let arrows = document.querySelectorAll('.arrow');
    let sliderDiv = document.querySelector('.slider');

    removeShow(images);
    images[imgCount].classList.add('show');
    dots[imgCount].classList.add('active');
    sliderDiv.style.height = ((sliderDiv.getBoundingClientRect().width / 100) * 60) + 'px';



    var slideTimer = new Timer(function () {
        imgCount++;
        if (imgCount > images.length - 1) {
            imgCount = 0;
        }
        updateSlider(images, imgCount, dots);

    }, 4000)

    // start slide interval
    slideTimer.start();

    // EventListeners for dots
    Array.from(dots).forEach(dot => {
        dot.addEventListener('click', function (e) {
            imgCount = e.target.name;
            updateSlider(images, imgCount, dots);
            slideTimer.reset(4000);
        })
    })

    // EventListeners for arrows
    Array.from(arrows).forEach(arrow => {
        arrow.addEventListener('click', e => {
            imgCount += parseInt(e.target.parentElement.name);
            if (imgCount > images.length - 1) {
                imgCount = 0;
            }
            if (imgCount < 0) {
                imgCount = images.length - 1
            }
            updateSlider(images, imgCount, dots);
            slideTimer.reset(4000);
        })
    })

})

window.addEventListener('resize', function () {
    let sliderDiv = document.querySelector('.slider');

    sliderDiv.style.height = ((sliderDiv.getBoundingClientRect().width / 100) * 60) + 'px';
});

function updateSlider(images, imgCount, dots) {
    removeShow(images);
    images[imgCount].classList.add('show');
    updateDots(dots);
    dots[imgCount].classList.add('active');

}

function removeShow(images) {
    Array.from(images).forEach(img => {
        img.classList.remove('show');
    });
}

function updateDots(dots) {
    Array.from(dots).forEach(dot => {
        dot.classList.remove('active');
    })
}

function Timer(fn, t) {
    var timerObj = setInterval(fn, t);

    this.stop = function () {
        if (timerObj) {
            clearInterval(timerObj);
            timerObj = null;
        }
        return this;
    }

    // start timer using current settings (if it's not already running)
    this.start = function () {
        if (!timerObj) {
            this.stop();
            timerObj = setInterval(fn, t);
        }
        return this;
    }

    // start with new or original interval, stop current interval
    this.reset = function (newT = t) {
        t = newT;
        return this.stop().start();
    }
}