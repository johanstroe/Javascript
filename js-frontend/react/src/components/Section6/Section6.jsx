import React, { useState } from 'react'
import phonecallicon from './../../assets/images/phonecall.svg'
import supportchat from './../../assets/images/supportchat.svg'
import notificationicon from './../../assets/images/notification.svg'
import Faq from './Faq';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Section6 = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(null);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailPattern.test(value));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isEmailValid) {
        try {
            const response = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    
                    email: email,
                    
                }),
            });

            console.log('Response status:', response.status); 

            if (response.ok) {
                toast.success(`Thank you for subscribing to our newsletter!`);

                setEmail('');
                
                
            } else {
                toast.error('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    } 
    
    else {
        toast.error('Please fill in a correct email-adress!');
    }
   
};
  
  return (
    <section className="section6">

      <div className="section6styling">
        <div>
          <h2 className="anyquestions"> Any questions? Check out the FAQs</h2>
          <p className="unanswered"> Still have unanswered questions and need to get in touch?</p>
          <div className="flexsorting6">
            <a href="#" className="questionbox">
              <img src={phonecallicon} alt="Phonecall Icon" />
              <p className="questionboxtext"> Still have questions?</p><span className="spanquestiontext1">Contact us </span><i
                id="bluearrow" className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#" className="questionbox">
              <img src={supportchat} alt="Support Icon" />
              <p className="questionboxtext">Don't like phonecalls?</p><span className="spanquestiontext2">Contact us </span><i
                id="greenarrow" className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <Faq />
      </div>

      <div className="subscribenewsletter">

        <img src={notificationicon} alt="image of a notificationbell" />
        <h2 className="h2section7">Subscribe to our newsletter to stay
          informed about latest updates</h2>

        <div className="emailsubscribe">
        <form className="formstyle" noValidate onSubmit={handleSubmit}>
            <i id="envelope" className="fa-sharp fa-light fa-envelope"></i>
            <input type="email" id="email" name="email" placeholder="Enter your email address" value={email} onChange={handleEmailChange} className={isEmailValid === true ? 'valid' : isEmailValid === false ? 'invalid' : ''}  required />
            <i className={`status-icon ${isEmailValid === true ? 'valid-icon' : isEmailValid === false ? 'invalid-icon' : ''}`}>
            {isEmailValid === true ? '✔️' : isEmailValid === false ? '❌' : ''}

    </i>
     
            <input className="submit" type="submit" value="Subscribe"/>
          </form>
          <ToastContainer />
        </div>
      </div>

    </section >
  )
}

export default Section6
