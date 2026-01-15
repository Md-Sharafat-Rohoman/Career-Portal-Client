import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';

const AddJob = () => {


    const handleAddJob = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log('Add Job Form Data:', data);

        const { max, min, currency, ...newJob } = data;
        newJob.salaryRange = { max, min, currency };
        console.log('New Job Data:', newJob);


        // job requirements process
        const requirementsString = newJob.requirements;
        const requirementsDirty = requirementsString.split(',');
        newJob.requirements = requirementsDirty.map(req => req.trim());
        console.log(newJob)

        // job responsibilities process
        const responsibilitiesString = newJob.responsibilities;
        const responsibilitiesDirty = responsibilitiesString.split(',');
        newJob.responsibilities = responsibilitiesDirty.map(res => res.trim());
        console.log(newJob)

        newJob.status = 'active'

        // save job to the server
        axios.post('http://localhost:3000/jobs', newJob)
            .then(result => {
                if (result.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log('Error adding job:', error);
            });

    }
    return (
        <div>
            <h1>Please Add Job</h1>
            <form onSubmit={handleAddJob}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border pt-4">
                    <legend className="fieldset-legend">Basic Info</legend>

                    <label className="label">Title</label>
                    <input type="text" name='title' className="input" placeholder="Job Title" />

                    <label className="label">Company</label>
                    <input type="text" name='company' className="input" placeholder="company name" />

                    <label className="label">Location</label>
                    <input type="text" name='location' className="input" placeholder="company Location" />

                    <label className="label">Company Logo</label>

                    <input type="url" name='company_logo' className="input" placeholder="company Logo URL" />
                </fieldset>

                {/* job type 1*/}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Type</legend>

                    <div className="filter" name='jobType'>
                        <input className="btn btn-square" type="reset" value="×" />
                        <input className="btn" type="radio" name="jobType" aria-label="on-site" />
                        <input className="btn" type="radio" name="jobType" aria-label="remote" />
                        <input className="btn" type="radio" name="jobType" aria-label="hybrid" />
                    </div>
                </fieldset>
                {/* job category 2 */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend" >Job Category</legend>
                    <select defaultValue="Job Category" name='jobCategory' className="select">
                        <option disabled={true}>Job Category</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                    </select>


                </fieldset>
                {/* Application Deadline 3 */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Application Deadline</legend>
                    <input type="date" name='deadline' className="input" />


                </fieldset>

                {/*  */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend" name='salaryRange'>Salary Range</legend>

                    <label className="label">Minimum Salary</label>
                    <input type="text" name='min' className="input" placeholder="Minimum Salary" />

                    <label className="label">Maximum Salary</label>
                    <input type="text" name='max' className="input" placeholder="Maximum Salary" />

                    <label className="label">Currency</label>
                    <select defaultValue="Select a currency" name='currency' className="select">
                        <option disabled={true}>Select a currency</option>
                        <option>BDT</option>
                        <option>USD</option>
                        <option>EU</option>
                    </select>

                </fieldset>
                {/* job description 4 */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Description</legend>
                    <textarea className="textarea" name='description' placeholder="job description"></textarea>


                </fieldset>
                {/* job requirements 5 */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Requirements</legend>
                    <textarea className="textarea" name='requirements' placeholder="job requirements (separate by comma)"></textarea>

                </fieldset>
                {/* job responsibilities 5 */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Responsibilities</legend>
                    <textarea className="textarea" name='responsibilities' placeholder="job responsibilities (separate by comma)"></textarea>

                </fieldset>

                {/* hr relate  */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border pt-4">
                    <legend className="fieldset-legend">HR Related Info</legend>

                    <label className="label">HR Name</label>
                    <input type="text" name='hr_name' className="input" placeholder="hr name" />

                    <label className="label">HR Email</label>
                    <input type="email" name='hr_email' className="input" placeholder="hr email" />
                </fieldset>
                <input type="submit" className='btn' value="Add Job" />


            </form>
        </div>
    );
};

export default AddJob;