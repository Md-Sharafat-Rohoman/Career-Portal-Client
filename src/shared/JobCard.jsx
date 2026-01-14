import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router';

const JobCard = ({ job }) => {
    const { _id, title, location, jobType, category, company, applicationDeadline, salaryRange, company_logo, description, requirements, responsibilities, status, hr_email, hr_name } = job;

    return (
        <div className="card bg-base-100 w-96 shadow-sm border-2 border-gray-200">
            <div className='flex items-center gap-4 p-4'>
                <div>
                    <figure>
                        <img
                            className='w-16 h-16 rounded-lg object-cover'
                            src={company_logo}
                            alt="Shoes" />
                    </figure>
                </div>
                <div >
                    <h2 className="card-title text-3xl font-bold">
                        {company}
                    </h2>
                    <p className='flex items-center gap-2'><CiLocationOn /> {location}</p>
                </div>
            </div>
            <div className="card-body">
                <h1 className='text-2xl font-semibold'> {title}</h1>
                <p>Salary : {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                <p>{description}</p>
                <div className="card-actions">
                    {requirements.map((req, index) => {
                        return <button
                            onClick={() => { }}
                            className='btn'
                            key={index}
                        >{req}</button>
                    })}
                </div>
                <div className="card-actions justify-end mt-4">
                    <Link to={`/jobs/${_id}`}>
                        <button className='btn btn-primary'>Show Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;