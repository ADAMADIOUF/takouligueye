import React,{useRef} from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser'
import { PageHero } from '../components'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import contactImg from '../assets/contact.jpg'
  
const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_3m6sdv3',
        'template_5mj4qui',
        form.current,
        'Gc1Gl0HLvCtGvFHPg'
      )
      .then(
        (result) => {
        
         toast.success(result)
toast.success('votre message a bien été envoyé!', {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
})
   
        },
        (error) => {
         toast.error(error.message)
      
        }
      )
  }
 
  return (
    <>
      <PageHero title='contact' />

      <Wrapper>
        <div className='section-center'>
          <div className='container-form'>
            <article>
              <img src={contactImg} alt='contact' className='contact-img' />
            </article>
            <article>
              <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type='text' name='user_name' />
                <label>Email</label>
                <input type='email' name='user_email' />
                <label>Message</label>
                <textarea name='message' />
                <input type='submit' value='Send' className='input-btn' />
              </form>
            </article>
          </div>
        </div>
        <ToastContainer />
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  .contact-img{
    width:100%;
    height:400px;
    object-fit:cover;
  }
  @media(min-width:992px){
    .contact-img{
      height:100%;
    }
  }
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type='submit'] {
      margin-top: 2rem;
      cursor: pointer;
      background: ;
      color: white;
      border: none;
    }
  .input-btn{
    background:#84cc16;
  }
`

export default Contact
