const box = document.getElementById("box");
const box2 = document.getElementById("box2");
var moosic = document.getElementById("backgroundmoosic");
var startsound = document.getElementById("startsound");

const about = document.getElementById("about");
const btn = document.getElementById("aboutbtn");

btn.addEventListener("click", () => {
    about.style.display = "flex";
    requestAnimationFrame(() => {
        about.classList.add("show");
    });
});

box2.style.display = "none";

document.getElementById("fadeBtn").addEventListener("click", () => {

    startsound.play()

    document.getElementById("fadeBtn").disabled = true;
    let opacity = 1;

  const interval = setInterval(() => {
    opacity -= 0.03;
    box.style.opacity = opacity;

    if (opacity <= 0) {
      clearInterval(interval);
      box.style.display = "none";

        backgroundmoosic.play();

      let opacity2 = 0;
      box2.style.opacity = 0;
      box2.style.display = "flex";

      const interval2 = setInterval(() => {
        opacity2 += 0.05;
        box2.style.opacity = opacity2;

        if (opacity2 >= 1) {
          clearInterval(interval2);
        }
      }, 50);
    }
  }, 50);
});

document.getElementById("about").addEventListener("click", () => {
    
})