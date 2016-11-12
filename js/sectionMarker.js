// marks the current section in the menubar
const sectionLinks = Array.prototype.slice.apply(document.querySelectorAll('.menus a'));

const uri = window.location.href;
sectionLinks.forEach(el => {
    if (el.href == uri) el.classList.add('active');
});
