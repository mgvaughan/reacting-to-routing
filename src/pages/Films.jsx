import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Films = () => {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(response => response.json())
            .then(data => setFilms(data))
            .catch(error => alert(error.message));
    }, [])

    return (
        <main className="container">
            <section className="row justify-content-center mt-5">
                {films.map(film => (
                    <div className="col-md-8" key={`film-${film.id}`}>
                        <div className="card shadow my-2">
                            <div className="card-body">
                                <div className="card-title fs-3 fw-semibold">{film.title}</div>
                                <p className="card-subtitle my-2">{film.description};</p>
                                <p className="card-text my-2 text-end">
                                    <Link to={`/films/${film.id}`}>
                                        Read Full Details
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
};

export default Films;