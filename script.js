const sidebar = document.querySelector('.sidebar');
function showSidebar() {
    sidebar.style.display = 'flex';
}
function hidesidebar() {
    sidebar.style.display = 'none';
}
//for h2
document.addEventListener("DOMContentLoaded", function () {
    const observerOptionsH2 = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when at least 10% of the element is in view
    };

    const observerCallbackH2 = (entries, observer) => {
        entries.forEach(entry => {
            const h2 = document.querySelector('.about-us-heading h2');
            if (entry.isIntersecting) {
                h2.classList.add('animate');
            } else {
                h2.classList.remove('animate'); // Remove the class when the section is out of view
            }
        });
    };

    const observerH2 = new IntersectionObserver(observerCallbackH2, observerOptionsH2);
    const target = document.querySelector('.first');
    if (target) {
        observerH2.observe(target);
    }
});
//for span
document.addEventListener("DOMContentLoaded", function () {
    const observerOptionsSpan = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when at least 10% of the element is in view
    };

    const observerCallbackSpan = (entries, observer) => {
        entries.forEach(entry => {
            const span = document.querySelector('.about-us-heading span');
            if (entry.isIntersecting) {
                span.classList.add('animate');
            } else {
                span.classList.remove('animate'); // Remove the class when the section is out of view
            }
        });
    };

    const observerSpan = new IntersectionObserver(observerCallbackSpan, observerOptionsSpan);
    const target = document.querySelector('.first');
    if (target) {
        observerSpan.observe(target);
    }
});
document.addEventListener('scroll', function() {
    const nav = document.querySelector("nav");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 0) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });
});

