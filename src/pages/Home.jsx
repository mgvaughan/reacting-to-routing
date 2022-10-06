import React from 'react';

const Home = () => {
    return (
        <section className="row justify-content-center mt-5">
            <div className="col-md-5">
                <div className="card shadow my-2">
                    <div className="card-body">
                        <div className="card-title fs-3 fw-semibold text-center">Reacting to Routing Lab</div>
                        <hr />
                        <p className="card-subtitle my-2">Welcome to my React Lab for Covalence called "Reacting to Routing Lab". In this lab I explored using React Router to be able to more effectively navigate a website.  In this lab we used the Studio Ghibli API to gather information on movies and characters created by the studio.</p>
                        <hr />
                        <p className="card-subtitle my-2 text-center text-muted .fs-1">Creator: Michael Vaughan </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;