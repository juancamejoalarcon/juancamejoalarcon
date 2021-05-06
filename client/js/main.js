// UI Elements
const menu = document.querySelector('.menu'),
      menuLinks = document.querySelectorAll('.menu-button'),
      contentSection = document.querySelector('.content-container'),
      contentDivs = document.querySelectorAll('.content');
      slideDivs = document.querySelectorAll('.slide');

console.log(slideDivs);

menu.addEventListener('click', function(e){

    e.preventDefault();
    if (e.target.tagName === 'A') {
        if (!e.target.classList.contains('current')) {
            // Remove class current from menu buttons
            menuLinks.forEach((button) => {
                button.classList.remove('current');
            });
            e.target.classList.add('current');
            const target = e.target.getAttribute('href');
            contentSection.classList.add("animation-outro");
            contentSection.classList.remove("animation-intro");
            setTimeout(function(){ 
                contentDivs.forEach((div) => {
                
                    if (div.id === target) {
                        div.style.display = 'flex';
                    } else {
                        div.style.display = 'none';
                    }
                });
                contentSection.classList.add("animation-intro");
                contentSection.classList.remove("animation-outro");
            }, 400);
        }
    }
});

function newSlide(num) {
    let next = num;
    slideDivs.forEach((div, index) => {
        if (div.classList.contains('hidden') === false) {
            slideDivs[index].classList.add('hidden');
            next += index;
        }
    });
    if (next >= slideDivs.length) {
        next = 0;
    } else if (next < 0) {
        next = slideDivs.length - 1;
    }
    slideDivs[next].classList.remove('hidden');
    slideDivs[next].classList.add('fade');
}
