import { useFormik } from 'formik'
import React, { useState, useEffect } from 'react'
import * as Yup from 'yup'

const ContactForm = () => {
  const emailRegEx = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  const [successMessage, setSuccessMessage] = useState("")

  const form = useFormik( {
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
      validationSchema: Yup.object( {
        name: Yup.string().required("Please enter your full name").min(2, "Your name must contain at least two characters"),
        email: Yup.string().required("Please enter your E-mail").matches(emailRegEx, "Invalid email format"),
        message: Yup.string().required("Please enter your message").min(2, "Your message must contain at least two characters"),
      }),

      onSubmit: async (values, {setSubmitting}) => {
        try {
          const json = JSON.stringify(values)
      
          const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
            method: 'post',
            headers: { 'content-type': 'application/json'},
            body: json
          })

          if (result.status === 200) {
            setSuccessMessage("Your message has been submitted to us, thank you!")
            console.log("200")
          }      
        }
        catch (error) {
          error = console.log('Error during API request')
        }
        finally {
          setSubmitting(false)
        } 
      }   
    })

    
    

  return (
    <>
      <form id="contact-form" onSubmit={form.handleSubmit} noValidate>
          <div className="form-row">
            <label className={(form.touched.name && form.errors.name) ? 'error': ''}>{form.touched.name && form.errors.name ? form.errors.name : ''}</label>
            <input className="form-input" name="name" type="text" value={form.values.name} onChange={form.handleChange} onBlur={form.handleBlur}/>
          </div>
          <div className="form-row">
            <label className={(form.touched.email && form.errors.email) ? 'error': ''}>{form.touched.email && form.errors.email ? form.errors.email : ''}</label>
            <input className="form-input" name="email" type="email" value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur}/>
          </div>
          <div className="form-row">
            <label className={(form.touched.message && form.errors.message) ? 'error': ''}>{form.touched.message && form.errors.message ? form.errors.message : ''}</label>
            <textarea className="form-input" name="message" type="text" value={form.values.message} onChange={form.handleChange} onBlur={form.handleBlur}/>
          </div>
          <button type="submit" className="btn-submit">Send Message<i className="fa-regular fa-arrow-up-right"></i></button>
          <div className="submit-message">
            <p className={`success-message ${successMessage ? '' : 'hidden'}`}>{successMessage}</p>
          </div>
      </form>
    </>
  )
}

export default ContactForm