// Declaring the constants 
// Collecting all the acher tags from HTML page to putting animaions on them onClick!
const navLink1 = document.getElementById("nav-link1");
const navLink2 = document.getElementById("nav-link2");
const navLink3 = document.getElementById("nav-link3");
const navLink4 = document.getElementById("nav-link4");
const navLink5 = document.getElementById("nav-link5");

const nav = document.getElementById("nav");
const menuBar = document.getElementById("menuBar");

// Now making an Array [] of all acher tags to perform a function instead write again & again. And appling the DRY role here. Don't repeat your self in coding 
const allNavLinks = [navLink1, navLink2, navLink3, navLink4, navLink5]


// Now making a function to remove classes as well as add in the acher tag to perform animations
function addRemoveClasses(action) {

    // We have to add classes as well as remove from all the acher tag, so we will use map methode of allNavLinks array to call its all elements and perform functions with all.

    allNavLinks.map((curElem, i) => {
        // Here we are using string letrals `` back tiks on the conditional base of our parameter which will be passed when called.
        curElem.classList.add(`slide-${action === 'in' ? 'in' : 'out'}-${i + 1}`);
        curElem.classList.remove(`slide-${action === 'in' ? 'out' : 'in'}-${i + 1}`);
    })
}

// Defining Functions
function toggleNav() {
    // toggling the menuBar button
    menuBar.classList.toggle("change");
    nav.classList.toggle("swipe-nav")
    // Now we are calling the class exchanging function on the conditonal base.
    menuBar.classList.contains("change") ? addRemoveClasses('in') : addRemoveClasses('out');
}


// Event listeners
menuBar.addEventListener("click", toggleNav);
// We are also using map function so that we should not to write again  and again.
allNavLinks.map((curElem) => {
    curElem.addEventListener("click", toggleNav)
})