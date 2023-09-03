// Add event listener to hide the loader when the page is fully loaded
window.addEventListener("load", function () {
    const loaderWrapper = document.querySelector(".loader-wrapper");
    loaderWrapper.style.transition = "opacity 0.5s";
    loaderWrapper.style.opacity = "0";
    setTimeout(function () {
        loaderWrapper.style.display = "none";
    }, 10000);
    // Add the "loaded" class to the body to apply styles to hide the loader
    document.body.classList.add("loaded");
});
