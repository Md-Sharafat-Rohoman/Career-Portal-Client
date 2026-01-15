import React from 'react';

const jobsApplication = (email) => {
    return fetch(`http://localhost:3000/jobs?email=${email}`).then(res => res.json())
};

export default jobsApplication;