import React , {useRef} from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'
import GbengaOyelamiResume from '../../assets/images/GbengaOyelamiResume.pdf'

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
                    <p><a href='mailto:oyelamigbenga11@gmail.com'>oyelamigbenga11@gmail.com</a></p>
                    <p><a href='tel:+2349021470757'>+2349021470757</a></p>
                    <div className="social-icon">
                      <a target='_blank' href='https://wa.me/+2349021470757'>Whatsapp</a> 
                      <a target='_blank' href='https://x.com/oyelamibiodun?t=8Yx8LwDbHVLj1tACi3fbww&s=08'>Twitter</a> 
                      <a target='_blank' href='https://www.linkedin.com/in/gbenga-oyelami-3a4495227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>Linkedin</a>  
                    </div>
                    <a href={GbengaOyelamiResume} download className='btn-download'>Download CV</a>
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
            <p>@ Gbenga Oyelami. I'm available to work!!!</p>
        </div>
    </section>
  )
}
export default Contact