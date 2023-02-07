let navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', function() {
    this.classList.toggle('trigger');
    // 要加些限制，以等待nav侧入动画结束
});