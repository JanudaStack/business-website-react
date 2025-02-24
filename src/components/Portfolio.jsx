import '../styles/Portfolio.css';

function Portfolio() {
    return (
        <>
            <div className="heading-container">
                <div className="container heading">
                    <h2>Our Portfolio</h2>
                </div>
            </div>
            <div className="card-container container">
                <div className="card-port">
                    <img src="/portfolio/portfolio-1.jpg" alt="" />
                    <div className="card-content">
                        <h3>Card 1</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maiores nihil obcaecati neque consequuntur.
                            Inventore quod odio adipisci dolorem, ullam nostrum
                            natus eligendi dolor fugit doloremque quibusdam
                            saepe dignissimos veniam amet!
                        </p>
                        <a href="" className="btn">
                            Read More
                        </a>
                    </div>
                </div>
                <div className="card-port">
                    <img src="/portfolio/portfolio-2.jpg" alt="" />
                    <div className="card-content">
                        <h3>Card 2</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maiores nihil obcaecati neque consequuntur.
                            Inventore quod odio adipisci dolorem, ullam nostrum
                            natus eligendi dolor fugit doloremque quibusdam
                            saepe dignissimos veniam amet!
                        </p>
                        <a href="" className="btn">
                            Read More
                        </a>
                    </div>
                </div>
                <div className="card-port">
                    <img src="/portfolio/portfolio-3.jpg" alt="" />
                    <div className="card-content">
                        <h3>Card 3</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maiores nihil obcaecati neque consequuntur.
                            Inventore quod odio adipisci dolorem, ullam nostrum
                            natus eligendi dolor fugit doloremque quibusdam
                            saepe dignissimos veniam amet!
                        </p>
                        <a href="" className="btn">
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;
