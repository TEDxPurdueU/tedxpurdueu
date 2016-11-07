const seasonLinks = Array.prototype.slice.apply(document.querySelectorAll('.seasonSelector a'));

if (seasonLinks.length != 0) {
    const path = window.location.pathname;
    seasonLinks.forEach(el => {
        if (el.href == path) el.classList.add('active');
    });
}
