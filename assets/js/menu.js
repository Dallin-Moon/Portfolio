document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const projectToggle = document.getElementById('project-menu-toggle');
    const projectMenu = document.getElementById('project-menu');


    if (menuToggle) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            menu.classList.toggle('open');
        });
    }

    if (projectToggle) {
        projectToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            projectMenu.classList.toggle('expanded');
        });
    }

    document.addEventListener('click', function(e) {
        if (menu && !e.target.closest('#menu-container')) {
            menu.classList.remove('open');
        }
    });
});
