import throttle from "lodash.throttle";

const objectData={};


const feedbackForm = document.querySelector (".feedback-form");
const emailInput = document.querySelector ("input");
const messageInput = document.querySelector ("textarea");


feedbackForm.addEventListener("submit", onSubmitForm);
feedbackForm.addEventListener("input", throttle(onTextareaInput ,500));

returnLocalStorageData()

function onSubmitForm (evt){
evt.preventDefault();
evt.currentTarget.reset();
localStorage.removeItem("feedback-form-state");
console.log (objectData);
}


function onTextareaInput(evt) {
objectData[evt.target.name]=evt.target.value.trim();
//const message = evt.target.value ;
localStorage.setItem ("feedback-form-state" , JSON.stringify(objectData))
}

function returnLocalStorageData (){
const savedMessage = localStorage.getItem("feedback-form-state");
const parseMessage = JSON.parse(savedMessage);

if(savedMessage) {
    console.log(parseMessage)
    messageInput.value=parseMessage.message||"" ;
    emailInput.value=parseMessage.email|| "" ;
}
};

