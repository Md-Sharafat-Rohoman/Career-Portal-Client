import React, { use } from 'react';
import JobApplicationRow from './JobApplicationRow';

const ApplicationList = ({ myApplicationsPromise }) => {
    const applications = use(myApplicationsPromise)
    console.log('Applications:', applications);


    return (
        <div>
            <h1>Application List : {applications.length}</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    No
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((application, index) => <JobApplicationRow key={application.id} application={application} index={index}></JobApplicationRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApplicationList;