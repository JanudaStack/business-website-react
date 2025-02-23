import '../styles/NumberCounter.css';

function NumberCounter() {
    return (
        <>
            <div className="container section-start">
                <div className="row">
                    <div className="section-title text-center">
                        <h3>Our Fun Facts</h3>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <section id="fun-facts">
                            <div className="fun-fact">
                                <h1 className="number" data-target="992">
                                    0
                                </h1>
                                <p>
                                    The standard chunk of Lorem Ipsum used since
                                    the 1500s is reproduced below for those.
                                </p>
                            </div>
                        </section>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <section id="fun-facts">
                            <div className="fun-fact">
                                <h1 className="number" data-target="575">
                                    0
                                </h1>
                                <p>
                                    The standard chunk of Lorem Ipsum used since
                                    the 1500s is reproduced below for those.
                                </p>
                            </div>
                        </section>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <section id="fun-facts">
                            <div className="fun-fact">
                                <h1 className="number" data-target="69">
                                    0
                                </h1>
                                <p>
                                    The standard chunk of Lorem Ipsum used since
                                    the 1500s is reproduced below for those.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NumberCounter;
