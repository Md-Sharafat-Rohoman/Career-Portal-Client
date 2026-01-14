import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const { _id, title, location, jobType, category, company, applicationDeadline, salaryRange, company_logo, description, requirements, responsibilities, status, hr_email, hr_name } = useLoaderData();


    return (
        <div className='my-10 space-y-3'>
            <h1 className='text-3xl font-bold'>Job Details of : {title}</h1>
            <h2 className='text-xl font-semibold'>Company : {company}</h2>
            <Link to={`/jobApply/${_id}`}>
                <button className='btn btn-primary'>Apply Now</button>
            </Link>
        </div>
    );
};

export default JobDetails;