const contactForm = () => {
  const form = document.querySelector('#form')
  const name = document.querySelector('#name')
  const phone = document.querySelector('#phone')
  const email = document.querySelector('#email')
  const message = document.querySelector('#message')

  if (window.localStorage.user) {
    const user = JSON.parse(localStorage.user)
    name.value = user.name
    phone.value = user.phone
    email.value = user.email
    message.value = user.message
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

    alert(`Thank you for your message, ${name.value}! We will get back to you as soon as possible.`)
    localStorage.removeItem('user')
    form.reset()
  }
  
  form.addEventListener('submit', submitForm)
}

contactForm()