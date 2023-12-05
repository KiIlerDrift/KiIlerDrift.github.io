document.addEventListener('DOMContentLoaded', function() {
    var mainContainer = document.querySelector('.container');
    mainContainer.addEventListener('animationend', function() {
        mainContainer.classList.add('animation-complete');
    });
});
