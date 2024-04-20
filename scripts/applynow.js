// navigation bar when users scroll down below banner part navigation bar will fixed at the top part 
// get the navigation bar 
const navigation = document.querySelector(".navigation-bar")
const apply_now_banner = document.querySelector(".apply_now_banner")
// add the scroll down event to window 
window.addEventListener('scroll', function () {
    // get the scrollTop value 
    const scroll_distance = document.documentElement.scrollTop
    if (scroll_distance >= apply_now_banner.offsetTop) {
        navigation.style.position = "fixed";
        navigation.style.top = "-10px";
        navigation.style.backgroundColor = "rgba(255,255,255,.9)";
    } else {
        navigation.style.position = "relative";
        navigation.style.top = "0";
    }
})

// get the form 
// value of name cant be empty
const Name = document.querySelector(".apply_form input[name=Name]")
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
const Email = document.querySelector(".apply_form input[name=Email]")
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
const Contact = document.querySelector(".apply_form input[name=contact_number]")
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

const form = document.querySelector(".apply_form")
const contact_msg = document.querySelector("#contact_msg")
const email_msg = document.querySelector("#email_msg")
const checkbox = document.querySelector(".apply_form input[type=checkbox]")
form.addEventListener('submit',function(event){
    if (!checkbox.checked) {
        alert('Please accept the terms & conditions and privacy policy.')
        event.preventDefault()
    }

    if (!verifyName()) event.preventDefault()
    if (!verifyEmail()) event.preventDefault()
    if (!verifyContact()) event.preventDefault()

})

