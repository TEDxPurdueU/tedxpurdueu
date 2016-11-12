// marks the current section in the menubar
const sectionLinks = Array.prototype.slice.apply(document.querySelectorAll('.menus a'));

function getLastWord(uri) {
    return uri.split('/').pop();
}

const uri = getLastWord(window.location.href);
sectionLinks.forEach(el => {
    if (uri == getLastWord(el.href)) el.classList.add('active');
});
