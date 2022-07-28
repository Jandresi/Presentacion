document.querySelectorAll('.navbar_opciones a').forEach(element => {
    element.addEventListener('click', () => {
        document.querySelector('.navbar_opciones .activo').classList.remove('activo');
        element.classList.add('activo');
    })
});