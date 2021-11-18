//import React from 'react'
import emailjs from 'emailjs-com'
const Contact = () => {
  function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm(
    'service_or411ha',
    'template_hgtkbya',
    e.target.value,
    'user_ki0S5izaJHswL1WQx2vkM'
    ).then(res =>{
      console.log(res);
    }).catch(err => console.log(err));

  } 
    return (
        <div>
            <secction className="contact" id="contact">
        <h1 className="heading"> <span>contact</span> us</h1>
        <div className="row">
          <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.78825226032!2d72.82321484315665!3d19.141690214234583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Bombay%2C%20Maharashtra%20400047%2C%20Inde!5e0!3m2!1sfr!2stn!4v1633015759086!5m2!1sfr!2stn" allowFullScreen loading="lazy" />
          <form action onSubmit={sendEmail}>
            <h3>get in touch</h3>
            <input type="text" placeholder="name" className="box" />
            <input type="email" placeholder="email" className="box" />
            <input type="number" placeholder="number" className="box" />
            <textarea placeholder="message" className="box" cold={30} rows={10} defaultValue={""} />
            <input type="submit" defaultValue="send message" className="btn" />
          </form>
        </div>
      </secction>
        </div>
    )
}

export default Contact
