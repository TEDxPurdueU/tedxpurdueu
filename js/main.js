// page transitions
setTimeout( function() {
    $("main").addClass("shown");
    $("footer").addClass("shown");
}, 120);

$("a").each(function(i, $el) {
    $el.addEventListener("click", function(e) {
        e.preventDefault();

        $("header")[0].classList.remove("open");

        if ($el.getAttribute("href") != window.location.href) {
            $("main").removeClass("shown");
            $(".hero").removeClass("shown").addClass("fasthide");
            $("footer").removeClass("shown");
            $("header")[0].className = "";

            setTimeout(function() {
                window.location.href = $el.getAttribute("href");
            }, 200);
        } else if (document.body.scrollTop != 0) {
            scrollToTop(200);
        }
    });
});

function scrollToTop(milliseconds) {
    var currentPos = document.body.scrollTop;
    var counter = 0;

    var scrollInterval = setInterval(function(){
        document.body.scrollTop = currentPos * (milliseconds / 10 - counter) / milliseconds * 10;
        counter ++;

        if (counter > milliseconds / 10) clearInterval(scrollInterval);
    }, 10)
}

// set highlighted links
$("#menubar a").click(function(evt) {
    evt.target.className = "active";
});
$("a[data-href='" + location.href + "']").addClass("active");

// shuffling images
let id = 0;
$(".hero img").load(function() {
    $(".hero").addClass("shown");
    if (purdueLocator && purdueLocator instanceof Function) purdueLocator(id);
});
id = Math.floor(Math.random() * 11).toString();
$(".hero img")[0].src = "/assets/" + id + ".jpg";


// menu button
var menubutton = $(".overflowButton")[0],
    header = $("header")[0];
menubutton.addEventListener("click", function(evt) {
    var isClosed = header.className.indexOf("open") == -1;

    console.info(isClosed);
    if (isClosed) {
        header.classList.add("open");
    } else {
        header.classList.remove("open");
    }
});
