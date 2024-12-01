document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    header.classList.add('initial-color');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.remove('initial-color');
            header.classList.add('scroll-color');
            header.classList.add('shrink');
        } else {
            header.classList.remove('scroll-color');
            header.classList.remove('shrink');
            header.classList.add('initial-color');
        }
    });
});


