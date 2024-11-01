import React, { useState, useEffect } from 'react';
import quoteicon from './../../assets/images/quotes.svg';

const fetchTestimonials = async () => {
    try {
        const response = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching testimonials:", error);
        return [];
    }
};

function Testimonials() {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        // Hämta testimonials när komponenten laddas
        fetchTestimonials().then(data => setTestimonials(data));
    }, []);

    return (
       
            
        <>{testimonials.map((testimonial, index) => (
        <div className="quote1">
            <img className="quoteicon" src={quoteicon} alt="" />
            
                <div className="stars" key={index}>
                    {Array.from({ length: 5 }).map((_, index) => (
                        index < testimonial.starRating ? (
                            <i key={index} className="fa-solid fa-star gold"></i>
                        ) : (
                            <i key={index} className="fa-regular fa-star"></i>
                        )
                    ))}
                    
                </div>
                    <p className="cardwithstars">{testimonial.comment}</p>
                    <div className="emojiicons">
                        <img src={testimonial.avatarUrl} alt={`${testimonial.author}'s avatar`} />
                        <div>
                            <span><b>{testimonial.author}</b></span>
                            <p className="profession">{testimonial.jobRole}</p>
                        </div>

                    </div>
        </div>
            ))}</>
    );
}

export default Testimonials;