import GridComplexExample from './GridComplexExample';
import '../styles/Contact.css';
function Contact() {
    return (
        <>
            <div className="container">
                <div className="container">
                    <div className="heading-container ">
                        <div className="heading" id="contact-us">
                            <h2>Contact Us</h2>
                        </div>
                    </div>
                    <div className="form-container">
                        <GridComplexExample />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
