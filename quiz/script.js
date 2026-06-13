const introLines = [
    { id: 'l0', audio: 'audios/1.mp3' },
    { id: 'l1', audio: 'audios/2.mp3' },
    { id: 'l2', audio: 'audios/3.mp3' },
    { id: 'l3', audio: 'audios/4.mp3' },
];

const questions = [
    {
        el: 'question1',
        lines: [
            { id: 'q1-label', audio: 'audios/q1.mp3' },
            { id: 'q1-text',  audio: 'audios/p1.mp3' },
        ]
    },
    {
        el: 'question2',
        lines: [
            { id: 'q2-label', audio: 'audios/q2.mp3' },
            { id: 'q2-text',  audio: 'audios/p2.mp3' },
        ]
    },
    {
        el: 'question3',
        lines: [
            { id: 'q3-label', audio: 'audios/q3.mp3' },
            { id: 'q3-text',  audio: 'audios/p3.mp3' },
        ]
    },
    {
        el: 'question4',
        lines: [
            { id: 'q4-label', audio: 'audios/q4.mp3' },
            { id: 'q4-text',  audio: 'audios/p4.mp3' },
        ]
    },
];

const endingLines = [
    { id: 'e0', audio: 'audios/e1.mp3' },
    { id: 'e1', audio: 'audios/e2.mp3' },
];

const mainBtn = document.getElementById('mainBtn');
let index = 0;

function playSequence(lines, onDone) {
    if (index >= lines.length) {
        index = 0;
        onDone();
        return;
    }

    const { id, audio } = lines[index];
    const el = document.getElementById(id);
    if (el) el.classList.add('visible');
    index++;

    const sound = new Audio(audio);
    sound.play().catch(() => {});
    sound.addEventListener('ended', () => setTimeout(() => playSequence(lines, onDone), 400));
    sound.addEventListener('error', () => setTimeout(() => playSequence(lines, onDone), 2000));
}

function showEnding() {
    const ending = document.querySelector('.ending');
    ending.classList.add('visible');
    index = 0;
    playSequence(endingLines, () => {});
}

function showQuestion(i) {
    if (i >= questions.length) {
        showEnding();
        return;
    }

    const q = questions[i];
    const el = document.getElementById(q.el);
    const btnGroup = el.querySelector('.q-buttons');
    el.classList.add('visible');
    index = 0;

    playSequence(q.lines, () => {
        btnGroup.classList.add('visible');

        el.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', () => {
                el.style.opacity = '0';
                el.style.transition = 'opacity 0.5s';
                setTimeout(() => {
                    el.classList.remove('visible');
                    el.style.opacity = '';
                    showQuestion(i + 1);
                }, 500);
            }, { once: true });
        });
    });
}

setTimeout(() => {
    playSequence(introLines, () => {
        mainBtn.classList.add('visible');
        mainBtn.addEventListener('click', () => {
            document.querySelector('.text').style.transition = 'opacity 0.5s';
            document.querySelector('.text').style.opacity = '0';
            mainBtn.style.transition = 'opacity 0.5s';
            mainBtn.style.opacity = '0';
            setTimeout(() => {
                document.querySelector('.text').style.display = 'none';
                mainBtn.style.display = 'none';
                showQuestion(0);
            }, 500);
        }, { once: true });
    });
}, 800);