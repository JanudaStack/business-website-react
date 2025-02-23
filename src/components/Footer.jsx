import '../styles/Footer.css';

function Footer() {
    return (
        <>
            <div className="footer-container">
                <div className="row">
                    <div className="col-lg-6 text-footer">
                        <div className="container">
                            <p>Ready To Do This</p>
                            <h3>Let&apos;s Get This To Work</h3>
                        </div>
                    </div>
                    <div className="col-lg-6 footer-links">
                        <div className="container">
                            <h3>Quick Links</h3>
                            <ul>
                                <li>Work</li>
                                <li>About</li>
                                <li>Let&apos;s Talk</li>
                            </ul>
                            <h3>Say Hello</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
