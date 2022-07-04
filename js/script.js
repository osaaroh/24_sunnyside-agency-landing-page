let nav_toggle = document.querySelector(".ham-icon");
let nav_wrapper = document.querySelector(".sunny-side__nav-wrapper");
let nav_list = document.querySelector("nav .sunny-side__nav-wrapper .nav-list")
let toggledOn = false;
nav_toggle.addEventListener('click', function() {
    toggleMobileNav(toggledOn);
})



function checkScreenSize(toggledOnParams) {
    if (toggledOnParams == true) {
        //check screen size in JS
        if (document.body.clientWidth > 772) {
            desktopNavStyleHelper();
        } else {
            //nav list styles
            nav_list.style.flexDirection = "column";

            //nav wrapper styles
            nav_wrapper.style.display = "flex";
            nav_wrapper.style.position = "absolute";
        }
    } else if (toggledOnParams == false) {
        if (document.body.clientWidth > 772) {
            desktopNavStyleHelper();
        } else {
            nav_wrapper.style.display = 'none';
        }
    }

}

function toggleMobileNav(toggledOnParams) {
    if (toggledOnParams == false) {
        checkScreenSize(true);
        toggledOn = true;
    } else if (toggledOnParams == true) {
        checkScreenSize(false);
        toggledOn = false;
    }
}


function desktopNavStyleHelper(params) {
    //nav list styles
    nav_list.style.flexDirection = "row";

    //nav wrapper styles
    nav_wrapper.style.display = "block";
    nav_wrapper.style.position = "relative";
}

//on screen resize ensure nav state is still preserved
//use document.body.clientWidth instead of screen.width
window.addEventListener("resize", function(event) {
    // console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight + ' high');
    checkScreenSize(toggledOn);
})