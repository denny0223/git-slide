function jumpPage(dst) {
  cur = window.location.hash.match(/\d+/);
  document.getElementById("slide-" + cur).className = "slide hidden";
  document.getElementById("slide-" + dst).className = "slide";
  window.location.hash = '#' + dst;
  prehash = cur;
}

function jumpPrePage() {
  jumpPage(prehash);
}
