import React , {useRef} from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_3iccpgn', 'template_b6lyjso', form.current, {
            publicKey: 'GgPHs1AmBPtx8uLf9',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert("Email sent");
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    return (
    <section id="contact">
        <div className="container">
            <div className="row">
                <div className="contact-left">
                    <h1 className='subtitle'>Contact me</h1>
                    <p>contact@gmail.com</p>
                    <p>03045905443</p>
                    <div className="social-icon">
                      <a href=''>Facebook</a> 
                      <a href=''>Twitter</a> 
                      <a href=''>Linkedin</a>  
                    </div>
                    <a href='#' download className='btn-download'>Download CV</a>
                </div>
                <div className='contact-right'>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type='text' name='from_name' placeholder='Your name' required />
                        <input type='email' name='from_email' placeholder='Your email' required />
                        <textarea name='message' rows={6} placeholder='Your message'/>
                        <button type='submit' value='send' className='btn-2' >Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <div className="copyright">
            <p>Copyright @ Gbenga. Made with by Easy Tutorials</p>
        </div>
    </section>
  )
}
export default Contact