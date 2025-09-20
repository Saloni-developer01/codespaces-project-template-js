import React from 'react';

const Contact = () => {
    return (
        <section id='contact'>
            
             <form action="https://api.web3forms.com/submit" method="POST" className="contact-right" style={{marginLeft:"25rem", marginTop:"5rem", marginBottom:"7rem"}} >
                <div className="contact-right-title">
                    <h1 style={{textAlign:"center", marginLeft:"4rem"}}>Contact Me</h1>
                    <h3 style={{marginTop:"1.7rem", marginLeft:"9rem"}}>webhostingportfolio124@gmail.com</h3>
                    <h3 style={{marginTop:"0.5rem", marginLeft:"5rem"}}>Feel free to Contact me with any inquiries or questions!</h3>
                    
                </div>
                <div className="input-divs">
                    <input type="hidden" name="access_key" value="b09a3d12-92b3-49e8-81ac-ba422f11dc81"/>
                    <input type="text" name="name" placeholder="Your Name" className="contact-input" required/>
                    <input type="email" name="email" placeholder="Your Email" className="contact-input" required/>

                    <textarea name="message" placeholder="Your Message" className="contact-input"  ></textarea>
                <button type="submit">Send</button>
                </div>
                
            </form>



        </section>
    );
}

export default Contact;
