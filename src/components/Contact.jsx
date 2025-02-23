import GridComplexExample from './GridComplexExample';
import '../styles/Contact.css';
function Contact() {
    return (
        <>
            <div className="container">
                <div className="container">
                    <div className="heading-container ">
                        <div className=" heading">
                            <h2>Contact Us</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="form-container">
                                <GridComplexExample />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="img-container">
                                <img src="/about/about-6.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
