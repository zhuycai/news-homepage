let navToggle = document.querySelector('.nav-toggle');
let nav = document.querySelector('.nav');
let navCollapse = document.querySelector('.nav-collapse');

navToggle.addEventListener('click', function() {
    nav.classList.add('slide-in');
    document.body.classList.add('mask');
    requestAnimationFrame(function() {
        document.body.classList.add('on');
    });
});

navCollapse.addEventListener('click', function() {
    nav.classList.remove('slide-in');
    document.body.classList.remove('mask', 'on');
});