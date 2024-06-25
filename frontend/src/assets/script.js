document.addEventListener('scroll', function() {
    var homeElement = document.querySelector('.home');
    var homePosition = homeElement.getBoundingClientRect().top;
    var viewportHeight = window.innerHeight;

    // Check if the .home element is in the viewport
    if (homePosition < viewportHeight) {
        homeElement.classList.add('show-animation');
    }
});
