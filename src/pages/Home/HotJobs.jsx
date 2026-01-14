import React, { use } from 'react';
import JobCard from '../../shared/JobCard';

const HotJobs = ({ jobsPromise }) => {
    const jobs = use(jobsPromise);
    console.log(jobs)


    return (
        <div>
            <h1 className='text-3xl font-bold mb-8 text-center my-10'>Hot Jobs of the Day</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    jobs.map(job => <JobCard job={job} key={job._id}></JobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;