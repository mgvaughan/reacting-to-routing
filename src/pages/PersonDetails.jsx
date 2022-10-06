import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const PersonDetails = () => {

    const { personid } = useParams();

    const [personDetails, setPersonDetails] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/people/${personid}`)
            .then(response => response.json())
            .then(data => setPersonDetails(data))
            .catch(error => alert(error.message));
    }, [personid])

    if (!personDetails) {
        return <h1>loading...</h1>;
    }

    return (
        <main className="container">
            <section className="row justify-content-center mt-5">
                    <div className="col-md-5">
                        <div className="card shadow my-2">
                            <div className="card-body">
                                <div className="card-title fs-3 fw-semibold">{personDetails?.name}</div>
                                <hr />
                                <p className="card-subtitle my-2 ms-2">Gender: {personDetails?.gender}</p>
                                <p className="card-subtitle my-2 ms-2">Age: {personDetails?.age}</p>
                                <p className="card-subtitle my-2 ms-2">Eye Color: {personDetails?.eye_color}</p>
                                <p className="card-subtitle my-2 ms-2">Hair Color: {personDetails?.hair_color}</p>
                                <p className="card-text my-2 ms-2">
                                    <Link to="/people">Go Back</Link>
                                </p>
                            </div>
                        </div>
                    </div>
            </section>
        </main>
    );
};

export default PersonDetails;