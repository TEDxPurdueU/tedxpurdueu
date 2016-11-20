const seasonLinks = Array.prototype.slice.apply(document.querySelectorAll('.seasonSelector a'));

if (seasonLinks.length != 0) {
    const path = window.location.pathname;
    seasonLinks.forEach(el => {
        if (el.href.indexOf(path) > -1) el.classList.add('active');
    });

    // for styling other things around it
    $('body').addClass('withSeasons');
}
