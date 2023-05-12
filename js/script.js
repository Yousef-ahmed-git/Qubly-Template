// Background Of Header
let header = document.getElementsByTagName('header')[0];
window.scrollY >= header.offsetHeight ? header.classList.add('scrolled') : header.classList.remove('scrolled');
window.onscroll = () => {
    window.scrollY >= header.offsetHeight ? header.classList.add('scrolled') : header.classList.remove('scrolled');
};

// Prevent Default On About Link
document.querySelector('header a.about-link').onclick = (e) => e.preventDefault();

// Scroll To Top
topBtn = document.querySelector('.up');

topBtn.onclick = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
};

window.addEventListener('scroll', () => {
    window.scrollY >= 500 ? topBtn.classList.remove('hide') : topBtn.classList.add('hide');
});
window.scrollY >= 500 ? topBtn.classList.remove('hide') : topBtn.classList.add('hide');

// Scroll To Section Link
let links = Array.from(document.querySelectorAll('.nav-links a'));

links.forEach(ele => {
    ele.onclick = (e) => {
        document.documentElement.scrollTo({top: document.getElementById(`${ele.dataset.link}`).offsetTop - 96})
        e.preventDefault();
    };
});