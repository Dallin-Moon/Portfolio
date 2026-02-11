document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const projectMenu = document.getElementById('project-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('open');
        });
    }

    if (projectMenu) {
        projectMenu.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('expanded');
        });
    }

    document.addEventListener('click', function(e) {
        if (menu && !e.target.closest('#menu-container')) {
            menu.classList.remove('open');
        }
    });
});
