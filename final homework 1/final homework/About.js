window.addEventListener("scroll", () => {
    var pos = scrollY;
    if (pos > 0) {
        if (document.getElementsByTagName("header")[0].className != "active")
            return
        else {
            document.getElementsByTagName("header")[0].className = "active";
        }
    }
});
const changeNav = () => {
    const header = document.getElementById("header");
    var scroll_y = this.scrollY;
    if (scroll_y > 0) {
        header.classList.add("headerActive");
    }
    else {
        header.classList.remove("headerActive");
    }
};
window.addEventListener("scroll", changeNav);