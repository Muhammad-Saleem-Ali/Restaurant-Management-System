


// -----------review----------



'use strict'
var testim = document.getElementById("testim"),
    testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimleftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer
    ;

window.onload = function () {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }
        if (slide < 0) {
            slide = currentSlide = testimContent.length - 1;
        }
        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }
        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;

        clearTimeout(testimTimer);
        testimTimer = setTimeout(function () {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimleftArrow.addEventListener("click", function () {
        playSlide(currentSlide -= 1);
    })
    testimRightArrow.addEventListener("click", function () {
        playSlide(currentSlide += 1);
    })

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function () {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }
    playSlide(currentSlide);

}




// -----checkbox-----index----

window,addEventListener('scroll' , function(){
    let navbar = document.querySelector('nav');
    if(window.pageYOffset > 450){
        navbar.classList.add('sticky');

    }
    else{
        navbar.classList.remove('sticky');
    }
});




// ---------------------layout-------------

function fixed(params) {
    if (c == "sticky") {
        
        window,addEventListener('scroll' , function(){
            let navbar = document.querySelector('nav');
            if(window.pageYOffset > 450){
                navbar.classList.add('sticky');
        
            }
            else{
                navbar.classList.remove('sticky');
            }
        });
    }
    else{
        document.getElementByclass("navbar").style.position = "sticky";
    }
}






function myFunction() {
   var c = document.getElementById("hide").style.display;
    if (c == "block") {
        document.getElementById("hide").style.display = "none";
    }
    else{
        document.getElementById("hide").style.display = "block";
    }
  }


 
       function color1() {
        document.getElementById('change').style.background= '#3f6ad8';
       }
       function color2() {
        document.getElementById('change').style.background= '#6c757d';
       }
       function color3() {
        document.getElementById('change').style.background= '#3ac47d';
       }
       function color4() {
        document.getElementById('change').style.background= '#16aaff';
       }
       function color5() {
        document.getElementById('change').style.background= '#f7b924';
       }
       function color6() {
        document.getElementById('change').style.background= '#d92550';
       }
       function color7() {
        document.getElementById('change').style.background= '#eee';
       }
       function color8() {
        document.getElementById('change').style.background= '#343a40';
       }
       function color9() {
        document.getElementById('change').style.background= '#444054';
       }
       function color10() {
        document.getElementById('change').style.background= '#794c8a';
       }
       function color11() {
        document.getElementById('change').style.background= 'linear-gradient(60deg,#29323c 0%,#485563 100%)';
       }
       function color12() {
        document.getElementById('change').style.background= 'linear-gradient(-20deg,#2b5876 0%,#4e4376 100%)';
       }
       function color13() {
        document.getElementById('change').style.background= 'linear-gradient(to top,#1e3c72 0%,#1e3c72 1%,#2a5298 100%)';
       }
       function color14() {
        document.getElementById('change').style.background= ' linear-gradient(to bottom,#323232 0%,#3F3F3F 40%,#1C1C1C 150%),linear-gradient(to top,rgba(255,255,255,0.4) 0%,rgba(0,0,0,0.25) 200%)!important;';
       }
       function color15() {
        document.getElementById('change').style.background= 'linear-gradient(to right,#0f2027,#203a43,#2c5364)';
       }
       function color16() {
        document.getElementById('change').style.background= 'linear-gradient(to right,#141e30,#243b55)';
       }
       function color17() {
        document.getElementById('change').style.background= 'linear-gradient(45deg,#ff9a9e 0%,#fad0c4 99%,#fad0c4 100%)';
       }
       function color18() {
        document.getElementById('change').style.background= 'linear-gradient(to top,#a18cd1 0%,#fbc2eb 100%)';
       }
       function color19() {
        document.getElementById('change').style.background= 'linear-gradient(120deg,#f6d365 0%,#fda085 100%)';
       }
       function color20() {
        document.getElementById('change').style.background= 'linear-gradient(120deg,#84fab0 0%,#8fd3f4 100%)';
       }
       function color21() {
        document.getElementById('change').style.background= 'linear-gradient(120deg,#a6c0fe 0%,#f68084 100%)';
       }
       function color22() {
        document.getElementById('change').style.background= 'linear-gradient(to top,#cfd9df 0%,#e2ebf0 100%)';
       }
       function color23() {
        document.getElementById('change').style.background= 'linear-gradient(120deg,#fccb90 0%,#d57eeb 100%)';
       }
       function color24() {
        document.getElementById('change').style.background= 'linear-gradient(to right,#4facfe 0%,#00f2fe 100%)';
       }
       function color25() {
        document.getElementById('change').style.background= 'linear-gradient(120deg,#e0c3fc 0%,#8ec5fc 100%)';
       }
       function color26() {
        document.getElementById('change').style.background= 'linear-gradient(120deg,#f093fb 0%,#f5576c 100%)';
       }
       function color27() {
        document.getElementById('change').style.background= 'radial-gradient(circle 248px at center,#16d9e3 0%,#30c7ec 47%,#46aef7 100%)';
       }
       function color28() {
        document.getElementById('change').style.background= 'linear-gradient(135deg,#667eea 0%,#764ba2 100%)';
       }
       function color29() {
        document.getElementById('change').style.background= 'linear-gradient(120deg,#89f7fe 0%,#66a6ff 100%)';
       }
       function color30() {
        document.getElementById('change').style.background= 'linear-gradient(180deg,#2af598 0%,#009efd 100%)';
       }
       function color31() {
        document.getElementById('change').style.background= 'linear-gradient(to top,#c471f5 0%,#fa71cd 100%)';
       }
       function color32() {
        document.getElementById('change').style.background= 'linear-gradient(to right,#f78ca0 0%,#f9748f 19%,#fd868c 60%,#fe9a8b 100%)';
       }
       function color33() {
        document.getElementById('change').style.background= 'linear-gradient(to top,#0ba360 0%,#3cba92 100%)';
       }
       function color34() {
        document.getElementById('change').style.background= 'linear-gradient(to top,#ff0844 0%,#ffb199 100%)';
       }
       function color35() {
        document.getElementById('change').style.background= 'linear-gradient(to right,#434343 0%,black 100%)';
       }
       function color36() {
        document.getElementById("change").style.background= 'linear-gradient(to bottom,#00b09b,#96c93d)';
       }

       

       
       function col1() {
        document.getElementById('change2').style.background= '#3f6ad8';
       }
       function col2() {
        document.getElementById('change2').style.background= '#6c757d';
       }
       function col3() {
        document.getElementById('change2').style.background= '#3ac47d';
       }
       function col4() {
        document.getElementById('change2').style.background= '#16aaff';
       }
       function col5() {
        document.getElementById('change2').style.background= '#f7b924';
       }
       function col6() {
        document.getElementById('change2').style.background= '#d92550';
       }
       function col7() {
        document.getElementById('change2').style.background= '#eee';
       }
       function col8() {
        document.getElementById('change2').style.background= '#343a40';
       }
       function col9() {
        document.getElementById('change2').style.background= '#444054';
       }
       function col10() {
        document.getElementById('change2').style.background= '#794c8a';
       }
       function col11() {
        document.getElementById('change2').style.background= 'linear-gradient(60deg,#29323c 0%,#485563 100%)';
       }
       function col12() {
        document.getElementById('change2').style.background= 'linear-gradient(-20deg,#2b5876 0%,#4e4376 100%)';
       }
       function col13() {
        document.getElementById('change2').style.background= 'linear-gradient(to top,#1e3c72 0%,#1e3c72 1%,#2a5298 100%)';
       }
       function col14() {
        document.getElementById('change2').style.background= ' linear-gradient(to bottom,#323232 0%,#3F3F3F 40%,#1C1C1C 150%),linear-gradient(to top,rgba(255,255,255,0.4) 0%,rgba(0,0,0,0.25) 200%)!important;';
       }
       function col15() {
        document.getElementById('change2').style.background= 'linear-gradient(to right,#0f2027,#203a43,#2c5364)';
       }
       function col16() {
        document.getElementById('change2').style.background= 'linear-gradient(to right,#141e30,#243b55)';
       }
       function col17() {
        document.getElementById('change2').style.background= 'linear-gradient(45deg,#ff9a9e 0%,#fad0c4 99%,#fad0c4 100%)';
       }
       function col18() {
        document.getElementById('change2').style.background= 'linear-gradient(to top,#a18cd1 0%,#fbc2eb 100%)';
       }
       function col19() {
        document.getElementById('change2').style.background= 'linear-gradient(120deg,#f6d365 0%,#fda085 100%)';
       }
       function col20() {
        document.getElementById('change2').style.background= 'linear-gradient(120deg,#84fab0 0%,#8fd3f4 100%)';
       }
       function col21() {
        document.getElementById('change2').style.background= 'linear-gradient(120deg,#a6c0fe 0%,#f68084 100%)';
       }
       function col22() {
        document.getElementById('change2').style.background= 'linear-gradient(to top,#cfd9df 0%,#e2ebf0 100%)';
       }
       function col23() {
        document.getElementById('change2').style.background= 'linear-gradient(120deg,#fccb90 0%,#d57eeb 100%)';
       }
       function col24() {
        document.getElementById('change2').style.background= 'linear-gradient(to right,#4facfe 0%,#00f2fe 100%)';
       }
       function col25() {
        document.getElementById('change2').style.background= 'linear-gradient(120deg,#e0c3fc 0%,#8ec5fc 100%)';
       }
       function col26() {
        document.getElementById('change2').style.background= 'linear-gradient(120deg,#f093fb 0%,#f5576c 100%)';
       }
       function col27() {
        document.getElementById('change2').style.background= 'radial-gradient(circle 248px at center,#16d9e3 0%,#30c7ec 47%,#46aef7 100%)';
       }
       function col28() {
        document.getElementById('change2').style.background= 'linear-gradient(135deg,#667eea 0%,#764ba2 100%)';
       }
       function col29() {
        document.getElementById('change2').style.background= 'linear-gradient(120deg,#89f7fe 0%,#66a6ff 100%)';
       }
       function col30() {
        document.getElementById('change2').style.background= 'linear-gradient(180deg,#2af598 0%,#009efd 100%)';
       }
       function col31() {
        document.getElementById('change2').style.background= 'linear-gradient(to top,#c471f5 0%,#fa71cd 100%)';
       }
       function col32() {
        document.getElementById('change2').style.background= 'linear-gradient(to right,#f78ca0 0%,#f9748f 19%,#fd868c 60%,#fe9a8b 100%)';
       }
       function col33() {
        document.getElementById('change2').style.background= 'linear-gradient(to top,#0ba360 0%,#3cba92 100%)';
       }
       function col34() {
        document.getElementById('change2').style.background= 'linear-gradient(to top,#ff0844 0%,#ffb199 100%)';
       }
       function col35() {
        document.getElementById('change2').style.background= 'linear-gradient(to right,#434343 0%,black 100%)';
       }
       function col36() {
        document.getElementById("change2").style.background= 'linear-gradient(to bottom,#00b09b,#96c93d)';
       }