import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const ViewApplications = () => {
    const { job_id } = useParams();
    const applications = useLoaderData();


    const handleStatusChange = (e, application) => {
        console.log(e.target.value, application);


        axios(`http://localhost:3000/applications/${application}`, { status: e.target.value })
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount) {
                    Swal.fire({
                        title: "Good job!",
                        text: "application update status",
                        icon: "success"
                    });
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <h1 className='text-4xl'>{applications.length} Applications for : {job_id}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {
                            applications.map((application, index) => <tr key={application._id}>
                                <th>{index + 1}</th>
                                <td>{application.applicant}</td>
                                <td>{application.deadline}</td>
                                <td>
                                    <select onChange={(e) => handleStatusChange(e, application._id)} defaultValue={application.status} className="select">
                                        <option disabled={true}>Update Status</option>
                                        <option>Pending</option>
                                        <option>Interview</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;