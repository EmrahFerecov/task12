const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");
    const navbar = document.getElementById("navbar");

    menuIcon.addEventListener("click", () => {
        menuIcon.style.display = "none";
        closeIcon.style.display = "block";
        navbar.style.display = "block";
    });

    closeIcon.addEventListener("click", () => {
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
        navbar.style.display = "none";
    });