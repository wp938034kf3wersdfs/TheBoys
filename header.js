
function myFunction(e) {
    e.classList.toggle("change")
}

window.addEventListener("scroll", function () {
    var e = document.querySelector("nav"),
        s = document.querySelector("svg"),
        t = document.querySelector(".bar"),
        l = document.querySelector(".bar1"),
        c = document.querySelector(".bar2");
    e.classList.toggle("sticky", window.scrollY > 0),
        s.classList.toggle("sticky", window.scrollY > 0),
        t.classList.toggle("sticky", window.scrollY > 0),
        l.classList.toggle("sticky", window.scrollY > 0),
        c.classList.toggle("sticky", window.scrollY > 0)
});
