// header animation
document.addEventListener('DOMContentLoaded', function () {
    var header = document.getElementById('header');
    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;
        if (scrollPosition > 50) {
            header.classList.add('blur');
        } else {
            header.classList.remove('blur');
        }
    });
});