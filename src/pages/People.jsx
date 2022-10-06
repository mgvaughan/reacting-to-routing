import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Films = () => {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(response => response.json())
            .then(data => setPeople(data))
            .catch(error => alert(error.message));
    }, [])

    return (
        <main className="container">
            <section className="row justify-content-center mt-5">
                {people.map(person => (
                    <div className="col-md-5" key={`person-${person.id}`}>
                        <div className="card shadow my-2">
                            <div className="card-body">
                                <div className="card-title fs-3 fw-semibold text-decoration-underline">{person.name}</div>
                                <p className="card-subtitle my-2 ms-2">Gender: {person.gender}</p>
                                <p className="card-subtitle my-2 ms-2">Age: {person.age}</p>
                                <p className="card-text my-2 ms-2">
                                    <Link to={`/people/${person.id}`}>
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