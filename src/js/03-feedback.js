import throttle from "lodash.throttle";

const feedbackForm = document.querySelector (".feedback-form");
const emailInput = document.querySelector ("input");
const messageInput = document.querySelector ("textarea");


feedbackForm.addEventListener("submit", onSubmitForm)

function onSubmitForm (evt){
evt.preventDefault();
evt.currentTarget.reset();
localStorage.removeItem("feedback-form-state")
}

feedbackForm.addEventListener("input", throttle(onTextareaInput ,500))
function onTextareaInput(evt) {
const message = evt.target.value ;
localStorage.setItem ("feedback-form-state" , message)
}

function returnLocalStorageData (){
const savedMessage = localStorage.getItem("feedback-form-state");
const parseMessage = JSON.parse(savedMessage);

if(savedMessage) {
    console.log(parseMessage)
    messageInput.value=parseMessage.email||"" ;
    emailInput.value=parseMessage.message|| "" ;
}
};

