const box = document.getElementById("box");
const box2 = document.getElementById("box2");
var moosic = document.getElementById("backgroundmoosic");
var startsound = document.getElementById("startsound");
var selectsound = document.getElementById("selectsound");

const about = document.getElementById("about");
const updates = document.getElementById("updates");
const btn = document.getElementById("aboutbtn");
const btn2 = document.getElementById("updatesbtn");
const btn3 = document.getElementById("blogbtn");
const closebtn = document.getElementById("closebtn");
const closebtn2 = document.getElementById("closebtn2");
const mousehover = document.getElementById("mousehover");

const blackscreen = document.getElementById("blackscreen");
const blackscreen2 = document.getElementById("blackscreen2");

window.onload = function() {
    blackscreen2.classList.add("active");
}

mousehover.volume = 0.2;

btn.addEventListener("click", () => {
    about.style.display = "flex";

    setTimeout(() => {
        about.classList.add("show");
    }, 10);
});

closebtn.addEventListener("click", () => {
    about.classList.remove("show");

    setTimeout(() => {
        about.style.display = "none";
    }, 500);
});

btn2.addEventListener("click", () => {
    updates.style.display = "flex";

    setTimeout(() => {
        updates.classList.add("show");
    }, 10);
});

closebtn2.addEventListener("click", () => {
    updates.classList.remove("show");

    setTimeout(() => {
        updates.style.display = "none";
    }, 500);
});

box2.style.display = "none";

document.getElementById("fadeBtn").addEventListener("click", () => {

  document.querySelector('.sound-badge').classList.add('show');
  document.querySelector('.floor-label').classList.add('show');

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

document.getElementById("aboutbtn").addEventListener("click", () => {
    selectsound.play()
})

document.getElementById("updatesbtn").addEventListener("click", () => {
    selectsound.play()
})

btn.addEventListener("mouseenter", () => {
  mousehover.currentTime = 0;
  mousehover.play();
});

btn2.addEventListener("mouseenter", () => {
  mousehover.currentTime = 0;
  mousehover.play();
});

btn3.addEventListener("mouseenter", () => {
  mousehover.currentTime = 0;
  mousehover.play();
});

btn3.addEventListener("click", () => {
    blackscreen.classList.add("active");

    const fadeTime = 3000;
    const interval = 50;
    const volumeStep = moosic.volume / (fadeTime / interval);

    const fade = setInterval(() => {
        moosic.volume = Math.max(0, moosic.volume - volumeStep);

        if (moosic.volume <= 0) {
            clearInterval(fade);
        }
    }, interval);

    setTimeout(() => {
        window.location.href = "/blog";
    }, fadeTime);
});