import React, { use } from 'react';
import { Link } from 'react-router';

const JobList = ({ jobsApplication }) => {
    const jobs = use(jobsApplication);
    console.log(jobs)
    return (
        <div>
            <h1>Jobs created by you : {jobs.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job Title</th>
                            <th>Deadline</th>
                            <th>View Application</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {
                            jobs.map((job,index) => <tr key={job._id}>
                                <th>{index+1}</th>
                                <td>{job.title}</td>
                                <td>{job.deadline}</td>
                                <td><Link to={`/applications/:${job._id}`}>View Application</Link></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JobList;