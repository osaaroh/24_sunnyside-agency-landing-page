let nav_toggle = document.querySelector(".ham-icon");
let nav_wrapper = document.querySelector(".sunny-side__nav-wrapper");
let nav_list = document.querySelector("nav .sunny-side__nav-wrapper .nav-list")
let toggledOn = false;
let img_value_transform = document.querySelector(".sunny-side__value-propimgTransform");
let img_value_standout = document.querySelector(".sunny-side__value-propimgStandOut");
let img_service_graphics = document.querySelector(".sunny-side__our-services-imgGraphics");
let img_service_photog = document.querySelector(".sunny-side__our-services-imgPhotography");
nav_toggle.addEventListener('click', function() {
    toggleMobileNav(toggledOn);
})


function switchToMobileImages() {
    if (document.body.clientWidth < 772) {
        img_value_transform.src = "../images/mobile/image-transform.jpg";
        img_value_standout.src = "../images/mobile/image-stand-out.jpg";
        img_service_graphics.src = "../images/mobile/image-graphic-design.jpg";
        img_service_photog.src = "../images/mobile/image-photography.jpg";
    } else {
        img_value_transform.src = "../images/desktop/image-transform.jpg";
        img_value_standout.src = "../images/desktop/image-stand-out.jpg";
        img_service_graphics.src = "../images/desktop/image-graphic-design.jpg";
        img_service_photog.src = "../images/desktop/image-photography.jpg";
    }
}

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
    switchToMobileImages();
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

switchToMobileImages();