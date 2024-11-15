import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Navbar/Navbar'
import userplus from './../../../assets/images/userplus.svg'
import facebook from './../../../assets/images/facebook.svg'
import twitter from './../../../assets/images/twitter.svg'
import instagram from './../../../assets/images/instagram.svg'
import youtube from './../../../assets/images/youtube.svg'
import Map from './Map'
import './Contact.css'
import Footer from './../../Footer/Footer'


const Contact = () => {
    const [selectedSpecialist, setSelectedSpecialist] = useState('');
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState ('');
    const [isValidEmail, setIsValidEmail] = useState(null);
    const [isValidFullName, setIsValidFullName] = useState(null);

    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const nameRegex = /^[a-ö,A-Ö]+ [a-öA-Ö]+$/;
    
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (isValidEmail && isValidFullName && selectedSpecialist) {
            try {
                const response = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', { 
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        fullName: fullName,
                        email: email,
                        specialist: selectedSpecialist,
                    }),
                });

                console.log('Response status:', response.status); 

                if (response.ok) {
                    toast.success(`A ${selectedSpecialist} will contact you shortly!`);
                    setFullName('');
                    setEmail('');
                    setSelectedSpecialist('');
                    setIsValidEmail(null);
                    setIsValidFullName(null);
                } else {
                    toast.error('Something went wrong. Please try again.');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        } 
        
        else {
            toast.error('Please fill in all required fields correctly!');
        }
       
    };

    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);
        setIsValidEmail(emailRegex.test(value));
    };

    const handleFullNameChange = (event) => {
        const value = event.target.value;
        setFullName(value);
        setIsValidFullName(nameRegex.test(value));
    };

    const handleSpecialistChange = (event) => {
        const value = event.target.value;
        setSelectedSpecialist(value);
    
    };

    return (
        <>
            <section className="section1contacts">
                <Navbar />

                <div className="containercontent">

                    <div className="homeandforwardbutton">
                        <a href="/"><i className="fa-light fa-house"></i><span
                            className="house"><em>Homepage</em></span>
                        </a>

                        <a href="/contact"><i id="chevronright" className="fa-sharp fa-solid fa-chevrons-right"></i><span
                            className="contactstext">Contact</span>
                        </a>
                        <h1 className="h1html2">Contact Us</h1>
                    </div>

                    <div className="emailusdiv">
                        <div className="emailcontainer">
                            <div className="userdiv flexclass">
                                <i id="emailusenvelope" className="fa-light fa-envelope"></i>
                            </div>
                            <h3 className="h3style">Email Us</h3>
                        </div>
                        <p className="text1">Please feel free to drop us a line. We will respond as soon as possible.</p>
                    </div>
                    <a className="leavemessage" href="#">Leave a message </a> <i id="arrowright"
                        className="fa-solid fa-arrow-right"></i>

                    <div className="careersdiv">
                        <div className="emailcontainer">
                            <div className="userdiv flexclass">
                                <img id="userplus" src={userplus} />
                            </div>
                            <h3 className="h3style">Careers</h3>
                        </div>
                        <p className="text1">Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
                    </div>
                    <div className="divmessage">
                        <a className="leavemessage" href="#">Send an application</a><i id="arrowright"
                            className="fa-solid fa-arrow-right"></i>
                    </div>

                    <div className="formula">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <h2>Get Online Consultation</h2>
                        <div className="form-content">
                            <label htmlFor="full-name">Full name</label>
                            <input type="text" 
                            id="full-name" 
                            name="full-name" 
                            value={fullName}
                            onChange={handleFullNameChange}
                            style ={{borderColor: isValidFullName === null ? '' : isValidFullName ? 'green' : 'red',}}
                            
                            />
                            
                            {isValidFullName === true && <span style={{ color: 'green' }}>✓</span>}
                            {isValidFullName === false && <span style={{ color: 'red' }}>✗</span>}

                            <label htmlFor="email">Email address</label>
                            <input 
                            type="email" 
                            id="emailadress" 
                            name="email" 
                            value={email}
                            onChange={handleEmailChange}
                            style={{
                                borderColor: isValidEmail === null ? '' : isValidEmail ? 'green' : 'red',
                            }}
                            />

                            {isValidEmail === true && <span style={{ color: 'green' }}>✓</span>}
                            {isValidEmail === false && <span style={{ color: 'red' }}>✗</span>}

                            <label htmlFor="specialist">Specialist</label>
                            <select id="specialist" name="specialist" value={selectedSpecialist} onChange={handleSpecialistChange}>
                                <option disabled value=""></option>
                                <option value="dentist">Dentist</option>
                                <option value="therapist">Therapist</option>
                                <option value="doctor">Doctor</option>
                            </select>
                            <button className="submitbutton" type="submit">Make an appointment</button>
                        </div>
                    </form>
                    <ToastContainer />
                </div>
                </div>

                

            </section >
            
            <section className="mapsection">
                <div className="medicalcontainer">
                    <Map />
                    <div className="medicalcenters">
                        <div className="medcenter">
                            <h3 className="medcenter1"> Medical Center 1</h3>
                            <ul>
                                <li className="medlist"><i className="fa-light fa-location-dot icons"></i><span className="spantext">4517
                                    Washington Ave.Manchester, Kentucky
                                    39495</span></li>
                                <li className="medlist"><i className="fa-thin fa-phone-volume icons"></i><span className="spantext">(406)
                                    555-0120</span></li>
                                <li className="medlist"><i className="fa-thin fa-clock icons"></i>
                                    <span className="spantext"><b> Mon - Fri:</b>
                                        9:00 am - 22:00 am</span>
                                    <span className="spantext2"><br /><b>Sat - Sun:</b>9:00 am - 20:00 am</span></li>
                            </ul>
                        </div>
                        <div className="medcenter">
                            <h3 className="medcenter2"> Medical Center 2</h3>
                            <ul>
                                <li className="medlist"><i className="fa-light fa-location-dot icons"></i><span className="spantext">4517
                                    Washington Ave.Manchester, Kentucky
                                    39495</span></li>
                                <li className="medlist"><i className="fa-thin fa-phone-volume icons"></i><span className="spantext">(406)
                                    555-0120</span></li>
                                <li className="medlist"><i className="fa-thin fa-clock icons"></i>
                                    <span className="spantext"><b> Mon - Fri:</b>
                                        9:00 am - 22:00 am</span>
                                    <span className="spantext2"><br /><b>Sat - Sun:</b>9:00 am - 20:00 am</span></li>
                            </ul>
                        </div>
                        <div className="socialmediacontainer">

                            <button className="socialmedia"><img src={facebook} /></button>
                            <button className="socialmedia"><img src={twitter} /></button>
                            <button className="socialmedia"><img src={instagram} /></button>
                            <button className="socialmedia"><img src={youtube} /></button>

                        </div>
                    </div>
                </div>

            </section>
            <Footer />
        </>
    )
}

export default Contact