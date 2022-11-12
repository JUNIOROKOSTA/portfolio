var buttons = document.querySelectorAll(".nav-buttons > li > a");
var collapse_menu = document.querySelector('.navbar-toggler');


function hideActive() {
    document.querySelectorAll(".active").forEach(popup => {
        popup.classList.remove("active");
    });
}

buttons.forEach((btn, index) => {

    btn.addEventListener('click', e => {
        hideActive();
        btn.classList.add('active')
    });
});

(function () {
    var btn_home = document.querySelector('.btn-home');
    var btn_projetos = document.querySelector('.btn-projetos');
    var btn_sobre = document.querySelector('.btn-sobre');
    var btn_contato = document.querySelector('.btn-contato');
    var collapse_btn = document.querySelector('.navbar-toggler');
    var collapse_menu = document.querySelector('#navbarSupportedContent');

    window.addEventListener('scroll', setNav);

    function setNav() {
        var positionYscroll = getYscroll();

        // home
        if (positionYscroll >= 0 && positionYscroll < 700) {
            btn_home.classList.add('active')
        };
        if (positionYscroll > 700 || positionYscroll < 0 && hasClassAc(btn_home, 'active')) {
            btn_home.classList.remove('active')
        };
        // projetos
        if (positionYscroll >= 710 && positionYscroll < 4120) {
            btn_projetos.classList.add('active')
        };
        if (positionYscroll > 4120 || positionYscroll < 710 && hasClassAc(btn_projetos, 'active')) {
            btn_projetos.classList.remove('active')
        };
        // sobre
        if (positionYscroll >= 4125 && positionYscroll < 5530) {
            btn_sobre.classList.add('active')
        };
        if (positionYscroll > 5530 || positionYscroll < 4125 && hasClassAc(btn_sobre, 'active')) {
            btn_sobre.classList.remove('active')
        };
        // contato
        if (positionYscroll >= 5535 && positionYscroll < 7900) {
            btn_contato.classList.add('active')
        };
        if (positionYscroll > 7900 || positionYscroll < 5535 && hasClassAc(btn_contato, 'active')) {
            btn_contato.classList.remove('active')
        };
    };

    function getYscroll() {
        return window.pageYOffset;
    };

    function hasClassAc(btn, palav) {
        btn = btn.className.split(' ');
        if ((btn.indexOf(palav) + 1) != 0) {
            return true
        }
    };
})();
