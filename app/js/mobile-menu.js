document.querySelector('.mobile-menu-btn-box').addEventListener('click', function () {
    document.querySelector('.mobile-menu-btn').classList.toggle('active')
    let body = document.querySelector('body')
    body.addEventListener('click', function (e) {
        var target = e.target
        if (target.classList.contains('popup-close') ||
            target.classList.contains('popup__inner') ||
            target.classList.contains('mobile-menu__link')) {
            document.querySelector('.mobile-menu-btn').classList.remove('active')
        }
    });
})