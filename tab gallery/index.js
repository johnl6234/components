window.addEventListener('DOMContentLoaded', function () {
    console.log('loaded');
    let images = document.querySelectorAll('img');
    let imgHolders = document.querySelectorAll('.img-holder');
    let mainImage = document.querySelector('.main-image');
    mainImage.appendChild(images[0]);

    for (let i = 0; i < imgHolders.length; i++) {
        imgHolders[i].appendChild(images[i + 1]);
        imgHolders[i].style.height = imgHolders[i].getBoundingClientRect().width + 'px';
        imgHolders[i].addEventListener('click', e => {
            let oldImage = e.target.parentElement.firstChild;
            e.target.parentElement.appendChild(mainImage.firstChild);
            mainImage.appendChild(oldImage)
            e.stopPropagation();
        });
    }
})