import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import JobList from './JobList';
import jobsApplication from '../../api/jobsApplication';

const MyPostedJobs = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1>My Posted Jobs</h1>
            <Suspense fallback={<div>Loading data ..........</div>}>
                <JobList jobsApplication={jobsApplication(user.email)}></JobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;