document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    // دالة لفتح/إغلاق القائمة
    function toggleMenu() {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
        
        if (navLinks.classList.contains('active')) {
            setTimeout(() => {
                navLinks.classList.add('show');
                animateMenuItems(true);
            }, 10);
        } else {
            navLinks.classList.remove('show');
            animateMenuItems(false);
        }
    }
    
    // دالة لتحريك عناصر القائمة
    function animateMenuItems(show) {
        const menuItems = document.querySelectorAll('.nav-links li');
        menuItems.forEach((item, index) => {
            if (show) {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, index * 100 + 100);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateX(20px)';
            }
        });
    }
    
    // إغلاق القائمة عند النقر خارجها
    function closeMenu() {
        navLinks.classList.remove('active', 'show');
        mobileMenuBtn.classList.remove('active');
        animateMenuItems(false);
    }
    
    // إعادة تعيين القائمة عند تغيير حجم النافذة
    function handleResize() {
        if (window.innerWidth > 768) {
            // إذا كانت الشاشة كبيرة، تأكد من إغلاق القائمة الموبايل
            closeMenu();
            // إعادة تعيين الأنماط لعناصر القائمة
            const menuItems = document.querySelectorAll('.nav-links li');
            menuItems.forEach(item => {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            });
        }
    }
    
    // Event listeners
    mobileMenuBtn.addEventListener('click', toggleMenu);
    
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-links') && !event.target.closest('.mobile-menu-btn')) {
            closeMenu();
        }
    });
    
    window.addEventListener('resize', handleResize);
    
    // بقية الكود الخاص بالتمرير والتأثيرات...
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
        } else {
            header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Fade-in animation for sections
    const sections = document.querySelectorAll('section');
    
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                section.classList.add('show');
            }
        });
    }
    
    // Initial check
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
});
