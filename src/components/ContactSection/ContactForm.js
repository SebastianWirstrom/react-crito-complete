import React, { useState } from 'react'


const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [showError, setShowError] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const userMessage = { name, email, message }
    const json = JSON.stringify(userMessage)

    const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
      method: 'post',
      headers: { 'content-type': 'application/json'},
      body: json
    })

    if (result.status === 200) {
      clearForm()
      setShowSuccess(true)
      setShowError(false)
      setSuccessMessage('Your message has been submitted!')
      setErrorMessage('')
    }
    else {
      setShowError(true)
      setShowSuccess(false)
      setErrorMessage('Something went wrong, try again!')
      setSuccessMessage('')
    }
  }

  const clearForm = () => {
    setName('')
    setEmail('')
    setMessage('')
    setShowError(false)
  }
  
  return (
    <>
      <form id="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <label className="form-label"/>
            <input className="form-input" value={name} placeholder="Name*" tabIndex="1" onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="form-row">
            <label className="form-label"/>
            <input className="form-input" value={email} placeholder="Email*" tabIndex="2" onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="form-row">
            <label className="form-label"/>
            <textarea className="form-input" value={message} placeholder="Your Message*" tabIndex="3" onChange={(e) => setMessage(e.target.value)}/>
          </div>
          <button type="submit" text="Send Message" className="btn-submit">Send Message<i className="fa-regular fa-arrow-up-right"></i></button>
          <div className="submit-message">
            {showError && <div className="error-message">{errorMessage}</div>}
            {showSuccess && <div className="success-message">{successMessage}</div>}
          </div>
      </form>
    </>
  )
}

export default ContactForm