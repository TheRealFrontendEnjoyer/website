const input = document.getElementById('passwordInput');
const btn = document.getElementById('submitBtn');
const error = document.getElementById('error');

if (new URLSearchParams(window.location.search).get('wrong')) {
    error.textContent = 'wrong password.';
    error.classList.add('visible');
}

function submit() {
    const val = input.value.trim();
    if (!val) return;

    sessionStorage.setItem('pwd', val);
    window.location.href = 'verify.html';
}

btn.addEventListener('click', submit);
input.addEventListener('keydown', e => {
    if (e.key === 'Enter') submit();
});