const burgerMenu = document.querySelector(".navbar-burger");
const navBarItems = document.getElementById("navbarExampleTransparentExample");

burgerMenu.addEventListener('click', function () {
    //add is-active class
    const sClassA = this.classList.value;
    const sClassB = navBarItems.classList.value;
    if (sClassA.includes("is-active")) {
        burgerMenu.classList.remove("is-active");
        navBarItems.classList.remove("is-active");
    } else {
        burgerMenu.classList.add("is-active");
        navBarItems.classList.add("is-active");
    }
});


//trigger model
const startUsing = document.getElementById("startUsing");
const modal = document.getElementById('modalTrigger');
const closeModal = document.querySelector('button[aria-label="close"]');

buttonClick(startUsing, function () {
    const sModalVal = modal.classList.value;
    if (sModalVal.includes("is-active")) {
        modal.classList.remove("is-active");
    } else {
        modal.classList.add("is-active");
    }
    buttonClick(closeModal, function () {
        modal.classList.remove("is-active");
    });
});

//custom function
function buttonClick(sEle, sFunction){
    sEle.addEventListener('click', function () {
        if (typeof sFunction === 'function') {
            //another stupid way to verify
            sFunction();
        }
    });
}
