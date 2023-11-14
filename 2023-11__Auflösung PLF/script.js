function toggleVisibility(e) {
    // console.log(e);
    window.t = e.target;
    parent = e.target.parentElement;
    kids = parent.children;
    h = kids[0];
    h.clicked = !h.clicked;
    if (h.clicked) {
        for (let i = 1; i < kids.length; i++) {
            kids[i].style.visibility = "visible";
            kids[i].style.position = "static";
        }
        parent.style.backgroundColor = "white";
        parent.style.color = "black";
    } else {
        for (let i = 1; i < kids.length; i++) {
            kids[i].style.visibility = "hidden";
            kids[i].style.position = "absolute";
        }
        parent.style.backgroundColor = "";
        parent.style.color = "";
    }
    // const pars = e.target.ch;
}
const articles = document.querySelectorAll("div.news-articles > article > h2");
// console.log(articles);
articles.forEach((a) => a.addEventListener("click", toggleVisibility));
