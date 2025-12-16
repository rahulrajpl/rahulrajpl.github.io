document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const navList = document.querySelector('.nav-list');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
            
            // Simple animation for the hamburger icon could be added here
            const bars = mobileToggle.querySelectorAll('.bar');
            // Reset or transform bars logic usually goes here
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navList.classList.contains('active') && 
            !navList.contains(e.target) && 
            !mobileToggle.contains(e.target)) {
            navList.classList.remove('active');
        }
    });
});
