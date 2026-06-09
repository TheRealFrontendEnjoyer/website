window.addEventListener("DOMContentLoaded", () => {
    const text = document.getElementById("text404");

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            text.classList.add("visible");
        });
    });

    setTimeout(() => {
        if (window.history.length > 1) {
            window.history.back();
        } else {
            window.location.href = "/";
        }
    }, 5000);
});