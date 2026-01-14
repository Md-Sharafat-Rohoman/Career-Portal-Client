import React, { Suspense } from 'react';
import ApplicationStars from './ApplicationStars';
import ApplicationList from './ApplicationList';
import useAuth from '../../hooks/useAuth';
import { myApplicationsPromise } from '../../api/application';



const MyApplications = () => {
    const { user } = useAuth();
    return (
        <div>
            <ApplicationStars></ApplicationStars>
            <Suspense fallback={<div>Loading Applications...</div>}>
                <ApplicationList
                    myApplicationsPromise={myApplicationsPromise(user.email)}
                ></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;