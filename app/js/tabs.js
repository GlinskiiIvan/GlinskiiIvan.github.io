document.querySelectorAll('.tabs__triger').forEach((item) => {
    item.addEventListener('click', function(e) {
        e.preventDefault()

        const id = e.target.getAttribute('href').replace('#', '')

        document.querySelectorAll('.tabs__triger').forEach((child) => {
            child.classList.remove('tabs-triger-active')
        })
        document.querySelectorAll('.tabs__item').forEach((child) => {
            child.classList.remove('tabs-item-active')
        })

        item.classList.add('tabs-triger-active')
        document.getElementById(id).classList.add('tabs-item-active')

    })
})
document.querySelector('.tabs__triger').click()











document.querySelectorAll('.sign').forEach((item) => {
    item.addEventListener('click', function (e) {
        e.preventDefault

        const id = e.target.getAttribute('href').replace('#', '')

        document.querySelectorAll('.sign').forEach((child) => {
            child.classList.remove('sign-active')
        })
        document.querySelectorAll('.form-login').forEach((child) => {
            child.classList.remove('form-login-active')
        })

        item.classList.add('sign-active')

        document.getElementById(id).classList.add('form-login-active')
    })
})
document.querySelector('.sign').click()
