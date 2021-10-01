const contactForm = () => {
  const form = document.querySelector('#form')
  const name = document.querySelector('#name')
  const phone = document.querySelector('#phone')
  const email = document.querySelector('#email')
  const message = document.querySelector('#message')

  const emailVerfication = document.querySelector('#emailVerification')
  const nameVerification = document.querySelector('#nameVerification')
  const phoneVerification = document.querySelector('#phoneVerification')
  const messageVerfication = document.querySelector('#messageVerification')

  let emailRegexTest = false
  let nameRegexTest = false
  let phoneRegexTest = false
  let messageRegexTest = false

  const checkbox = '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" />'
  const closeButton = '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />'

  if (window.localStorage.user) {
    const user = JSON.parse(localStorage.user)
    name.value = user.name
    phone.value = user.phone
    email.value = user.email
    message.value = user.message
  }

  const validateName = (name) => {
    if (/^[a-zA-Z]{3,}$/.test(name.target.value)) {
      nameVerification.innerHTML = checkbox
      nameRegexTest = true
    } else {
      nameVerification.innerHTML = closeButton
      nameRegexTest = false
    }
  }

  const validatePhone = (phone) => {
    if (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone.target.value)) {
      phoneVerification.innerHTML = checkbox
      phoneRegexTest = true
    } else {
      phoneVerification.innerHTML = closeButton
      phoneRegexTest = false
    }
  }

  const validateEmail = (email) => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.target.value)) {
      emailVerfication.innerHTML = checkbox
      emailRegexTest = true
    } else {
      emailVerfication.innerHTML = closeButton
      emailRegexTest = true
    }
  }

  const validateMessage = (message) => {
    if (!/^ *$/.test(message.target.value)) {
      messageVerfication.innerHTML = checkbox
      messageRegexTest = true
    } else {
      messageVerfication.innerHTML = closeButton
      messageRegexTest = true
    }
  }
  
  const updateLocalStorage = () => {
    const contactInfo = {
      name: name.value,
      phone: phone.value,
      email: email.value,
      message: message.value
    }
  
    localStorage.setItem('user', JSON.stringify(contactInfo))
  }

  const inputFields = document.querySelectorAll('.inputField')
        inputFields.forEach((field) => field.addEventListener('change', updateLocalStorage))
  
  const submitForm = (e) => {
    e.preventDefault()

    if (!nameRegexTest || !phoneRegexTest || !emailRegexTest || !messageRegexTest) return false

    alert(`Thank you for your message, ${name.value}! We will get back to you as soon as possible.`)
    localStorage.removeItem('user')
    form.reset()
  }
  
  name.addEventListener('keyup', validateName)
  phone.addEventListener('keyup', validatePhone)
  email.addEventListener('keyup', validateEmail)
  message.addEventListener('keyup', validateMessage)
  form.addEventListener('submit', submitForm)
}

contactForm()