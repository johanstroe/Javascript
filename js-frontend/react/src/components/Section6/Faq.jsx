import React, { useState, useEffect } from 'react';

// Accordion-komponent
const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div className="myaccordion">
            <button onClick={toggleAccordion} className="accordion">
                <span className="accordionquestion">{title}</span>
                <i className={`fa ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'} accordion-icon`}></i>
            </button>
            {isOpen && (
                <div className="panel">
                    <p className="accordiontext">{content}</p>
                </div>
            )}
        </div>
    );
};

// Faq-komponent
function Faq() {
    const [faq, setFaq] = useState([]);

    const fetchFaq = async () => {
        try {
            const response = await fetch('https://win24-assignment.azurewebsites.net/api/faq');
            const data = await response.json();
            console.log("Fetched data:", data);
            return data;
        } catch (error) {
            console.error("Error fetching faq:", error);
            return [];
        }
    };

    useEffect(() => {
        // Hämta FAQ när komponenten laddas
        fetchFaq().then(data => setFaq(data));
    }, []);

    return (
        <div className="accordion-div">
            {faq.map((item, index) => (
                <Accordion key={index} title={item.title} content={item.content} />
            ))}
        </div>
    );
}

export default Faq;
