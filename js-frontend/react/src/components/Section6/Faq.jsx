import React, { useState, useEffect, useRef } from 'react';

// Accordion-komponent
const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null); // Referens till innehållet

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div className="myaccordion">
        
            <button onClick={toggleAccordion} className={`accordion ${isOpen? "active" : ""}`}>
                <span className="accordionquestion">{title}</span>
            </button>
            
            
            <div
                ref={contentRef}
                className="panel"
                style={{
                    maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.4s  ease-in, max-height 0.4s ease-out",
                }}
            >
                    <p className="accordiontext">{content}</p>
                </div>
            
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
