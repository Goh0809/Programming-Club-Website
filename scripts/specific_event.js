const event_nav = document.querySelector('.event_nav ul')
const items = document.querySelectorAll('.event-content .item')
event_nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
        document.querySelector('.event_nav .active').classList.remove('active')
        e.target.classList.add('active')
        const i = +e.target.dataset.id
        document.querySelector('.event-content .active').classList.remove('active')
        items[i].classList.add('active')
    }
})

// get the form 
// value of name cant be empty
const Name = document.querySelector(".form input[name=Name]")
Name.addEventListener('change',verifyName)
function verifyName(){
    const span = Name.nextElementSibling
    if (Name.value.trim() === "") {
        span.style.visibility = "visible";
        return false
    }
    span.style.visibility = "hidden";
    return true
}

// value of email cant be empty
const Email = document.querySelector(".form input[name=Email]")
Email.addEventListener('change',verifyEmail)
function verifyEmail(){
    const span = Email.nextElementSibling
    if (Email.value.trim() === "") {
        span.style.visibility = "visible";
        return false
    } else {
        if (!validateEmail()) {
            email_msg.style.visibility = 'visible';
            email_msg.innerHTML = "Please enter a valid email address "
            return false
        } else {
            span.style.visibility = "hidden";
            return true
        }
    }
}

// value of contact cant be empty and must be malaysian 
const Contact = document.querySelector(".form input[name=contact_number]")
Contact.addEventListener('change',verifyContact)
function verifyContact(){
    const span = Contact.nextElementSibling
    if (Contact.value.trim() === "") {
        span.style.visibility = "visible";
        return false
    } else {
        if (!validatePhoneNumber()) {
            contact_msg.style.visibility = "visible";
            contact_msg.innerHTML = "Please enter a valid phone number"
            return false
        } else {
            span.style.visibility = "hidden";
            return true
        }
    }
}

function validatePhoneNumber() {
    const malaysiaPhoneNumberRegex = /^(?:\+?60|0)[1-46-9]-*[0-9]{7,9}$/;
    const contact_value = Contact.value
    if (malaysiaPhoneNumberRegex.test(contact_value)) {
        return true
    } else {
        return false
    }
}

function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email_value = Email.value
    if (emailRegex.test(email_value)) {
        return true
    } else {
        return false
    }
}

const form = document.querySelector(".form")
const contact_msg = document.querySelector("#contact_msg")
const email_msg = document.querySelector("#email_msg")
console.log(contact_msg);
const checkbox = document.querySelector(".form input[type=checkbox]")
form.addEventListener('submit',function(event){
    if (!checkbox.checked) {
        alert('Please accept the terms & conditions and privacy policy.')
        event.preventDefault()
    }
    if (!verifyName()) event.preventDefault()
    if (!verifyEmail()) event.preventDefault()
    if (!verifyContact()) event.preventDefault()
})
