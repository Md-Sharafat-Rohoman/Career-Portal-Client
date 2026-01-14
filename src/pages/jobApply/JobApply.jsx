import React from 'react';
import { Link, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id: jobId } = useParams();
    // console.log('Job Apply Params:', jobId);
    const { user } = useAuth();
    // console.log('Job Apply User:', user);


    const handleApplyFormSubmit = e => {
        e.preventDefault();
        // Handle form submission logic here    
        console.log('Form submitted');
        const from = e.target;
        // const fromData = new FormData(from);
        // const data = Object.fromEntries(fromData.entries());
        // console.log('Form Data:', data);
        const linkedin = from.linkedin.value;
        const github = from.github.value;
        const resume = from.resume.value;
        // console.log(linkedin, github, resume);

        const application = {
            jobId,
            applicant: user.email,
            linkedin,
            github,
            resume

        }

        axios.post('http://localhost:3000/applications', application)
            .then(result => {
                if (result.data.acknowledged) {
                    Swal.fire({
                        title: "Good job!",
                        text: "You clicked the button!",
                        icon: "success"
                    });
                }
            })
            .catch(error => {
                console.log(error);
            })


    }
    return (
        <div>
            <h1 className='text-4xl'>Apply for this job : <Link to={`/jobs/${jobId}`}>Details</Link></h1>
            <form onSubmit={handleApplyFormSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">


                    <label className="label">LinkedIn Link</label>
                    <input type="url" className="input" name='linkedin' required placeholder="LinkedIn Profile Link" />

                    <label className="label">Github Link</label>
                    <input type="url" className="input" name='github' required placeholder="LinkedIn Link" />

                    <label className="label">Resume Link</label>
                    <input type="url" className="input" name='resume' required placeholder="Resume Link" />

                    <input className='btn btn-primary' type="submit" value="Apply" />
                </fieldset>
            </form>
        </div>
    );
};

export default JobApply;