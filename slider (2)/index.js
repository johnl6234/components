window.addEventListener('DOMContentLoaded', function () {
    let images = document.querySelectorAll('.storage');
    let imgHolders = document.querySelectorAll('.img-holder');
    let row = document.querySelector('#row-holder');
    let mainImgDiv = document.querySelector('.main-image');

    let currImg = document.querySelector('#curr-img');
    let nextImg = document.querySelector('#next-img');



    currImg.src = images[0].src;
    currImg.title = images[0].title;
    nextImg.src = images[1].src;
    nextImg.title = images[1].title;

    for (let i = 0; i < imgHolders.length; i++) {

        let newImg = document.createElement('img');
        newImg.title = i.toString();
        newImg.src = images[i].src;
        imgHolders[i].appendChild(newImg);
        imgHolders[i].style.height = imgHolders[i].getBoundingClientRect().width + 'px';


        imgHolders[i].addEventListener('click', e => {

            if (e.target.title == currImg.title) return;


            Array.from(imgHolders).forEach(img => {
                img.firstChild.classList.remove('current');
            })
            imgHolders[e.target.title].firstChild.classList.add('current');

            nextImg.title = e.target.title;
            nextImg.src = e.target.src;
            nextImg.classList.add('fade-in');
            nextImg.classList.remove('hide');
            currImg.classList.add('fade-out');

            nextImg.addEventListener('animationend', () => {
                currImg.classList.remove('fade-out')
                currImg.src = nextImg.src;
                currImg.title = nextImg.title;
                nextImg.classList.remove('fade-in');
                nextImg.classList.add('hide');
            });

            e.stopPropagation();
        });
    }
    imgHolders[0].firstChild.classList.add('current');
    mainImgDiv.style.height = row.getBoundingClientRect().height + 'px';
})