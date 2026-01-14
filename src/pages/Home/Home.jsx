import React, { Suspense } from 'react';
import Bannar from './Bannar';
import HotJobs from './HotJobs';

const jobsPromise = fetch('http://localhost:3000/jobs').then(res => res.json());
const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Suspense fallback={<div>Loading hot jobs...</div>}>
                <HotJobs jobsPromise={jobsPromise}></HotJobs>
            </Suspense>
        </div>
    );
};

export default Home;