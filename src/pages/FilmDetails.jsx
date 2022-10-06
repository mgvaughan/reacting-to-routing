import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const FilmDetails = () => {

    const { filmid } = useParams();

    const [filmDetails, setFilmDetails] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
            .then(response => response.json())
            .then(data => setFilmDetails(data))
            .catch(error => alert(error.message));
    }, [filmid])

    if (!filmDetails) {
        return <h1>loading...</h1>;
    }

    return (
        <main className="container">
            <section className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <div className="card shadow my-2">
                        <div className="card-body">
                            <div className="card-title fs-3 fw-semibold">{filmDetails?.title}</div>
                            <hr />
                            <p className="card-subtitle my-2">{filmDetails?.description}</p>
                            <p className="card-subtitle my-2">Director: {filmDetails?.director}</p>
                            <p className="card-subtitle my-2">Producer: {filmDetails?.producer}</p>
                            <p className="card-subtitle my-2">Release Date: {filmDetails?.release_date}</p>
                            <img src={filmDetails?.movie_banner} alt="" className="img-thumbnail" />
                            <p className="card-text my-2 text-end">
                                <Link to="/films">Go Back</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default FilmDetails;