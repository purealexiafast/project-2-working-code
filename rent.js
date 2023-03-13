const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // get the values from the form inputs
    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
})

// Login Modal

const loginBtn = document.querySelector('#login-button');
const loginModal = document.querySelector('#login-modal');
const closeBtn = document.querySelector('.close');

loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
});