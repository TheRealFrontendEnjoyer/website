window.addEventListener("DOMContentLoaded", () => {
    const text = document.getElementById("text404");

    const messages = [
        "What are you doing here?",
        "You shouldn't be here.",
        "Go back.",
        "This page doesn't exist.",
        "Seriously... leave."
    ];

    let i = 0;

    // change text every second
    const interval = setInterval(() => {
        i = (i + 1) % messages.length;
        text.textContent = messages[i];
    }, 1000);

    // redirect after 5 seconds
    setTimeout(() => {
        clearInterval(interval); // stop changing text

        if (window.history.length > 1) {
            window.history.back();
        } else {
            window.location.href = "/";
        }
    }, 5000);
});