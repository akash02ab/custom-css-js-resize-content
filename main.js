const divider = document.querySelector('.divider');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

const mousedownhandler = (e) => {
    document.addEventListener("mousemove", mousemovehandler);
    document.addEventListener("mouseup", mouseuphandler);
}

const mouseuphandler = (e) => {
    document.removeEventListener("mousemove", mousemovehandler);
    document.removeEventListener("mouseup", mouseuphandler);
}

const mousemovehandler = (e) => {
    left.style.width = e.clientX + "px";
    right.style.width = (window.innerWidth - e.clientX) + "px";
}

divider.addEventListener("mousedown", mousedownhandler);