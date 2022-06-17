import throttle from "lodash.throttle";

const form = document.querySelector('form');
const message = document.querySelector('textarea');
const mail = document.querySelector('input');

mail.addEventListener('input', throttle(onEmailInput,500));
message.addEventListener('input', throttle(onTextMessageInput, 500));
form.addEventListener('submit', onFormSubmit);

savedText();

function onFormSubmit(event) {
    event.preventDefault();

    if (mail.value === "" || message.value === "") {
    return 
    }
    
    console.log(`Email: ${mail.value}, Message: ${message.value}`);
    event.target.reset();
    localStorage.removeItem('email');
    localStorage.removeItem('feedback-message');
    
}

function onEmailInput(event) {
    const email = event.target.value;
    localStorage.setItem('email', email);
};

function onTextMessageInput(event) {
    const message = event.target.value;
    localStorage.setItem('feedback-message', message);
};

function savedText() {
    const savedMessage = localStorage.getItem('feedback-message');
    const savedEmail = localStorage.getItem('email');

    if (savedMessage) {
        message.value = savedMessage;
    }
    if (savedEmail) {
        mail.value = savedEmail;
    }
};
