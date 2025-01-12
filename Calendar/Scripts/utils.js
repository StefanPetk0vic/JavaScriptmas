//JS
let previousWidth = window.innerWidth;
window.addEventListener('resize',() => {
    const currentWidth = window.innerWidth;
    if(previousWidth<=820 && currentWidth > 820){
        window.scrollTo(0,0);
    }
    previousWidth=currentWidth;
});