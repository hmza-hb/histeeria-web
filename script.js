
const menuToggle = document.getElementById('mobile-menu-toggle');
const sidebarDrawer = document.getElementById('mobile-sidebar-drawer');
const menuOverlay = document.getElementById('menu-overlay');
const sidebarLinks = document.querySelectorAll('.mobile-link');

function toggleMobileMenu() {
    menuToggle.classList.toggle('open');
    sidebarDrawer.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    document.body.style.overflow = sidebarDrawer.classList.contains('active') ? 'hidden' : '';
}

menuToggle.addEventListener('click', toggleMobileMenu);
menuOverlay.addEventListener('click', toggleMobileMenu);

// Closes side panel automatically once an anchor node pathway targets a jump section link
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (sidebarDrawer.classList.contains('active')) toggleMobileMenu();
    });
}); 