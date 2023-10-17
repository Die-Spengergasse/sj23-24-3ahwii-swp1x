// Code zum ein-und ausklappen:

function toggleText(target) {
    console.log("clicked, target:");
    console.log(target);
    if (target.isShowingMore) {
        // target.style.whiteSpace = "nowrap";
        target.style.overflow = "hidden";
        // target.style.textOverflow = "ellipsis";
        target.style.height = "1.2em";
        target.isShowingMore = false;
    } else {
        // target.style.whiteSpace = "normal";
        target.style.overflow = "visible";
        // target.style.textOverflow = "clip";
        target.style.height = "auto";
        target.isShowingMore = true;
    }
}
