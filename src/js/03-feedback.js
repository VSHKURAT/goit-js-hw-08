import throttle from "lodash.throttle"
const FEEDBACK_FORM = "feedback-form-state"
const refs = {
    feedback: document.querySelector('textarea'),
    email: document.querySelector('input'),
    form: document.querySelector('form')
}   


console.log(refs.email)
console.log(refs.feedback)
console.log(refs.form)

updateInfo();
refs.form.addEventListener('input', throttle(saveMessage, 500))
refs.form.addEventListener('submit', onFormSubmit)

function saveMessage(e){
    
    const emailText = refs.email.value
    const feedbackText = refs.feedback.value
    localStorage.setItem(FEEDBACK_FORM, JSON.stringify({
    mail : emailText,
    message: feedbackText}))
    
    
}

function updateInfo(){
const savedInfo = localStorage.getItem(FEEDBACK_FORM)

if(savedInfo){
    const infoParce = JSON.parse(savedInfo)
    refs.email.value = infoParce.mail || "";
    refs.feedback.value = infoParce.message || ""
}
}

function onFormSubmit(e){
    e.preventDefault()
    e.currentTarget.reset();
    console.log(localStorage.getItem(FEEDBACK_FORM))
    localStorage.removeItem(FEEDBACK_FORM)
    
}