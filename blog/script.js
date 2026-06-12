const canvas = document.getElementById("trail");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resize();
window.addEventListener("resize", resize);

const stars = [];

// Create stars when mouse moves
window.addEventListener("mousemove", (e) => {
  stars.push({
    x: e.clientX,
    y: e.clientY,
    life: 1,
    size: Math.random() * 4 + 3,
    hue: Math.random() * 60 + 40, // gold/yellow range
    rotation: Math.random() * Math.PI * 2
  });
});

function drawStar(x, y, spikes, outerRadius, innerRadius, opacity, hue, rotation) {
  let rot = rotation;
  const step = Math.PI / spikes;

  ctx.beginPath();

  for (let i = 0; i < spikes; i++) {
    ctx.lineTo(
      x + Math.cos(rot) * outerRadius,
      y + Math.sin(rot) * outerRadius
    );
    rot += step;

    ctx.lineTo(
      x + Math.cos(rot) * innerRadius,
      y + Math.sin(rot) * innerRadius
    );
    rot += step;
  }

  ctx.closePath();

  ctx.shadowBlur = 15;
  ctx.shadowColor = `hsla(${hue}, 100%, 75%, ${opacity})`;
  ctx.fillStyle = `hsla(${hue}, 100%, 75%, ${opacity})`;
  ctx.fill();
}

function animate() {
  requestAnimationFrame(animate);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = stars.length - 1; i >= 0; i--) {
    const star = stars[i];

    // Fade and shrink
    star.life -= 0.02;
    star.size *= 0.98;
    star.rotation += 0.03;

    if (star.life <= 0 || star.size < 0.2) {
      stars.splice(i, 1);
      continue;
    }

    drawStar(
      star.x,
      star.y,
      5,
      star.size,
      star.size * 0.5,
      star.life,
      star.hue,
      star.rotation
    );
  }
}

animate();

const text = "The thought chamber. ";
let position = 0;

setInterval(() => {
  document.title =
    text.slice(position) + text.slice(0, position);

  position = (position + 1) % text.length;
}, 200);

var audioToPlay = document.getElementById("audioFile");

window.onload = function() {
    audioToPlay.play()
    blackscreen.classList.add("active");
}

const blackscreen = document.getElementById("blackscreen");