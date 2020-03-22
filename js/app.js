const menuIzquierdo = document.querySelector('.menu-izquierdo');

menuIzquierdo.addEventListener("click", (e) => {
    const classMenu = e.target.classList;

    const contenedor = document.querySelector('.pagina'),
        flechaIzquierda = document.querySelector('.fa-arrow-left'),
        flechaDerecha = document.querySelector('.fa-arrow-right');

    if (classMenu.contains('fa-arrow-left')) {
        contenedor.classList.add("no-menu");
        e.target.style.display = 'none';
        flechaDerecha.style.display = 'block';
    } else if (classMenu.contains('fa-arrow-right')) {
        contenedor.classList.remove("no-menu");
        e.target.style.display = 'none';
        flechaIzquierda.style.display = 'block';
    }
})