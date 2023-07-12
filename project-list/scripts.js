const hideButtons = document.getElementsByClassName("hid");
Array.from(hideButtons).forEach((button) => {
    button.addEventListener('click', () => {
        const element = button.parentNode;
        element.style.display = 'none';
    })
})

const unhideButtons = document.getElementById("unhide");
unhideButtons.addEventListener("click", () => {
    Array.from(hideButtons).forEach((button) => {
        const element = button.parentNode;
        element.style.display = 'block';
    })
})

const stars = document.getElementsByClassName("hov");
Array.from(stars).forEach((star) => {
    star.addEventListener('click', () => {
        const element = star.firstChild;
        (element.style.color == "rgb(218, 165, 32)") ? (element.style.color = "rgb(255,255,255)") : (element.style.color = "rgb(218, 165, 32)");
        star.classList.remove("hov");
    })
})

document.addEventListener("DOMContentLoaded", function() {
    // Check login status
    var isLoggedIn = sessionStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
        // Redirect to login page
        window.location.href = "login.html";
    } 
});

