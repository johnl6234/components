window.addEventListener('DOMContentLoaded', (event) => {
    let button = document.getElementById('flash');
    button.addEventListener('mouseover', (e) => {
        let grad1 = 0;
        let grad2 = 0;
        let grad3 = 0;
        let i = 0;
        var check = function () {
            if (grad1 >= 120) {
                button.style.background = 'rgb(9, 9, 121)';
            }
            else {
                setTimeout(_ => {
                    grad1 = i;
                    // if grad3 is at 20% start moving grad2
                    if (i > 10) {
                        grad2 = i - 10;
                    }
                    // if grad2 is at 20% start moving grad1
                    if (i > 20) {
                        grad3 = i - 20;
                    }
                    button.style.background = `linear-gradient(70deg, rgba(9, 9, 121, 1) ${grad3}%, rgba(0, 212, 255, 1) ${grad2}%, rgba(9, 9, 121, 1) ${grad1}%)`;
                    i++;
                    check();
                }, 3);
            }
        }
        check();
    });
})
